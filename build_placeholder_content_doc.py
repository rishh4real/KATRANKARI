from __future__ import annotations

from pathlib import Path
from docx import Document
from docx.enum.section import WD_SECTION
from docx.enum.style import WD_STYLE_TYPE
from docx.enum.table import WD_CELL_VERTICAL_ALIGNMENT, WD_TABLE_ALIGNMENT
from docx.enum.text import WD_ALIGN_PARAGRAPH, WD_BREAK
from docx.oxml import OxmlElement
from docx.oxml.ns import qn
from docx.shared import Cm, Inches, Pt, RGBColor


ROOT = Path(__file__).resolve().parent
OUT_DIR = ROOT / "deliverables"
OUT_PATH = OUT_DIR / "KatranKaari_Placeholder_Content_Inventory.docx"

BURGUNDY = "681426"
DEEP = "4D101D"
ROSE = "B7827D"
CREAM = "FAF4E9"
INK = "493D37"
MUTED = "6B5B52"
PALE = "F1E4D5"


def set_cell_shading(cell, fill: str) -> None:
    tc_pr = cell._tc.get_or_add_tcPr()
    shd = tc_pr.find(qn("w:shd"))
    if shd is None:
        shd = OxmlElement("w:shd")
        tc_pr.append(shd)
    shd.set(qn("w:fill"), fill)


def set_cell_margins(cell, top=100, start=120, bottom=100, end=120) -> None:
    tc = cell._tc
    tc_pr = tc.get_or_add_tcPr()
    tc_mar = tc_pr.first_child_found_in("w:tcMar")
    if tc_mar is None:
        tc_mar = OxmlElement("w:tcMar")
        tc_pr.append(tc_mar)
    for margin, value in (("top", top), ("start", start), ("bottom", bottom), ("end", end)):
        node = tc_mar.find(qn(f"w:{margin}"))
        if node is None:
            node = OxmlElement(f"w:{margin}")
            tc_mar.append(node)
        node.set(qn("w:w"), str(value))
        node.set(qn("w:type"), "dxa")


def add_field(paragraph, field: str) -> None:
    run = paragraph.add_run()
    fld_char1 = OxmlElement("w:fldChar")
    fld_char1.set(qn("w:fldCharType"), "begin")
    instr_text = OxmlElement("w:instrText")
    instr_text.set(qn("xml:space"), "preserve")
    instr_text.text = field
    fld_char2 = OxmlElement("w:fldChar")
    fld_char2.set(qn("w:fldCharType"), "end")
    run._r.extend([fld_char1, instr_text, fld_char2])


def setup_document() -> Document:
    doc = Document()
    section = doc.sections[0]
    section.page_width = Inches(8.5)
    section.page_height = Inches(11)
    section.top_margin = Inches(0.65)
    section.bottom_margin = Inches(0.65)
    section.left_margin = Inches(0.72)
    section.right_margin = Inches(0.72)

    styles = doc.styles
    normal = styles["Normal"]
    normal.font.name = "Aptos"
    normal.font.size = Pt(9.5)
    normal.font.color.rgb = RGBColor.from_string(INK)
    normal.paragraph_format.space_after = Pt(5)
    normal.paragraph_format.line_spacing = 1.08

    title = styles["Title"]
    title.font.name = "Aptos Display"
    title.font.size = Pt(30)
    title.font.bold = True
    title.font.color.rgb = RGBColor.from_string(DEEP)
    title.paragraph_format.space_after = Pt(10)

    for style_name, size, color, before, after in [
        ("Heading 1", 20, DEEP, 6, 8),
        ("Heading 2", 14, BURGUNDY, 8, 4),
        ("Heading 3", 11, INK, 6, 3),
    ]:
        style = styles[style_name]
        style.font.name = "Aptos Display"
        style.font.size = Pt(size)
        style.font.bold = True
        style.font.color.rgb = RGBColor.from_string(color)
        style.paragraph_format.space_before = Pt(before)
        style.paragraph_format.space_after = Pt(after)
        style.paragraph_format.keep_with_next = True

    if "Copy Label" not in styles:
        copy_label = styles.add_style("Copy Label", WD_STYLE_TYPE.PARAGRAPH)
        copy_label.font.name = "Aptos"
        copy_label.font.size = Pt(8)
        copy_label.font.bold = True
        copy_label.font.color.rgb = RGBColor.from_string(BURGUNDY)
        copy_label.font.all_caps = True
        copy_label.paragraph_format.space_before = Pt(4)
        copy_label.paragraph_format.space_after = Pt(1)
        copy_label.paragraph_format.keep_with_next = True

    if "Small Note" not in styles:
        note = styles.add_style("Small Note", WD_STYLE_TYPE.PARAGRAPH)
        note.font.name = "Aptos"
        note.font.size = Pt(8)
        note.font.color.rgb = RGBColor.from_string(MUTED)
        note.paragraph_format.space_after = Pt(4)

    header = section.header
    hp = header.paragraphs[0]
    hp.text = "KATRANKAARI  /  WEBSITE CONTENT INVENTORY"
    hp.style = styles["Small Note"]
    hp.alignment = WD_ALIGN_PARAGRAPH.RIGHT
    hp.runs[0].font.bold = True
    hp.runs[0].font.color.rgb = RGBColor.from_string(BURGUNDY)

    footer = section.footer
    fp = footer.paragraphs[0]
    fp.alignment = WD_ALIGN_PARAGRAPH.CENTER
    r = fp.add_run("Working copy for review  •  24 November 2026  •  Page ")
    r.font.name = "Aptos"
    r.font.size = Pt(7.5)
    r.font.color.rgb = RGBColor.from_string(MUTED)
    add_field(fp, "PAGE")
    return doc


def label_copy(doc: Document, label: str, copy: str) -> None:
    doc.add_paragraph(label, style="Copy Label")
    doc.add_paragraph(copy)


def bullet(doc: Document, text: str, level: int = 0) -> None:
    p = doc.add_paragraph(style="List Bullet" if level == 0 else "List Bullet 2")
    p.paragraph_format.space_after = Pt(2)
    p.add_run(text)


def page_title(doc: Document, number: str, title: str, note: str) -> None:
    p = doc.add_paragraph()
    if len(doc.paragraphs) > 2:
        p.paragraph_format.page_break_before = True
    p.paragraph_format.space_after = Pt(3)
    r = p.add_run(number)
    r.bold = True
    r.font.size = Pt(8)
    r.font.color.rgb = RGBColor.from_string(ROSE)
    r.font.name = "Aptos"
    doc.add_heading(title, level=1)
    n = doc.add_paragraph(note, style="Small Note")
    n.paragraph_format.space_after = Pt(9)


def status_table(doc: Document, rows: list[tuple[str, str, str]]) -> None:
    table = doc.add_table(rows=1, cols=3)
    table.alignment = WD_TABLE_ALIGNMENT.CENTER
    table.autofit = False
    widths = [Inches(1.7), Inches(2.1), Inches(3.1)]
    headers = ["AREA", "CURRENT STATUS", "CLIENT ACTION"]
    for idx, cell in enumerate(table.rows[0].cells):
        cell.width = widths[idx]
        cell.text = headers[idx]
        set_cell_shading(cell, BURGUNDY)
        set_cell_margins(cell)
        for run in cell.paragraphs[0].runs:
            run.font.bold = True
            run.font.size = Pt(7.5)
            run.font.color.rgb = RGBColor(255, 255, 255)
    for row_idx, row in enumerate(rows):
        cells = table.add_row().cells
        for idx, value in enumerate(row):
            cells[idx].width = widths[idx]
            cells[idx].text = value
            cells[idx].vertical_alignment = WD_CELL_VERTICAL_ALIGNMENT.CENTER
            set_cell_margins(cells[idx])
            if row_idx % 2 == 0:
                set_cell_shading(cells[idx], PALE)
            for p in cells[idx].paragraphs:
                p.paragraph_format.space_after = Pt(0)
                for run in p.runs:
                    run.font.size = Pt(8)
                    run.font.color.rgb = RGBColor.from_string(INK)
    doc.add_paragraph()


def add_product(doc: Document, title: str, category: str, price: str, description: str, details: list[str], variant: str) -> None:
    doc.add_heading(title, level=3)
    p = doc.add_paragraph()
    p.paragraph_format.space_after = Pt(3)
    r = p.add_run(f"{category}  •  {price}")
    r.bold = True
    r.font.color.rgb = RGBColor.from_string(BURGUNDY)
    doc.add_paragraph(description)
    for detail in details:
        bullet(doc, detail, 1)
    doc.add_paragraph(f"Development variant: {variant}", style="Small Note")


def build() -> Path:
    OUT_DIR.mkdir(parents=True, exist_ok=True)
    doc = setup_document()

    # Cover
    p = doc.add_paragraph()
    p.paragraph_format.space_before = Pt(70)
    p.paragraph_format.space_after = Pt(8)
    r = p.add_run("CLIENT CONTENT REVIEW")
    r.font.name = "Aptos"
    r.font.size = Pt(9)
    r.font.bold = True
    r.font.color.rgb = RGBColor.from_string(BURGUNDY)
    r.font.letter_spacing = Pt(1.2)
    doc.add_paragraph("KatranKaari Website\nPlaceholder Content Inventory", style="Title")
    p = doc.add_paragraph("A page-by-page working-copy document for sorting, verification and replacement before launch.")
    p.style = doc.styles["Subtitle"]
    p.runs[0].font.name = "Aptos"
    p.runs[0].font.size = Pt(13)
    p.runs[0].font.color.rgb = RGBColor.from_string(MUTED)

    table = doc.add_table(rows=3, cols=2)
    table.alignment = WD_TABLE_ALIGNMENT.LEFT
    table.autofit = False
    for row, (label, value) in zip(table.rows, [
        ("Prepared for", "KatranKaari content review"),
        ("Prepared on", "24 November 2026"),
        ("Scope", "Current development website copy"),
    ]):
        row.cells[0].width = Inches(1.3)
        row.cells[1].width = Inches(4.9)
        row.cells[0].text = label
        row.cells[1].text = value
        for cell in row.cells:
            set_cell_margins(cell, 85, 110, 85, 110)
        set_cell_shading(row.cells[0], BURGUNDY)
        set_cell_shading(row.cells[1], PALE)
        row.cells[0].paragraphs[0].runs[0].font.bold = True
        row.cells[0].paragraphs[0].runs[0].font.color.rgb = RGBColor(255, 255, 255)

    doc.add_paragraph()
    doc.add_heading("How to use this document", level=2)
    doc.add_paragraph("This inventory captures the text currently used in the development website. It is intentionally broader than obvious placeholder text so the content team can review every working claim, message and label in one place.")
    bullet(doc, "Replace all items marked as demo, sample, pending, reserved or fictional before launch.")
    bullet(doc, "Verify figures, names, partner descriptions, prices and operational policies with the authorised source owner.")
    bullet(doc, "Keep approved wording as-is or return a replacement directly against the matching heading.")
    note = doc.add_paragraph("Important: inclusion here does not mean a statement is inaccurate. It means the copy is currently implemented and should be approved, sourced or replaced by the client.")
    note.style = doc.styles["Small Note"]

    page_title(doc, "01", "Priority replacement checklist", "Items most likely to block production launch or create customer confusion.")
    status_table(doc, [
        ("Products & prices", "Eight mock catalogue products with demo SKUs, stock and prices.", "Provide the Shopify catalogue or approved product sheet."),
        ("Customer stories", "Eight sample names, locations and testimonials.", "Replace with consented, verbatim customer reviews or remove."),
        ("Impact figures", "Homepage and impact-page figures are displayed as factual claims.", "Confirm scope, reporting period and approved source for every figure."),
        ("Artisan stories", "Generic Artisan 01–03 profiles, quotes and portrait placeholders.", "Provide approved names, portraits, biographies and consented quotes."),
        ("Education content", "Research-style copy plus three explicitly sample article pages.", "Approve sources and claims; replace sample article outlines."),
        ("Commerce operations", "Accounts, tracking, checkout and review integrations are described as pending.", "Replace when Shopify, policies and order workflows are live."),
        ("Contact & policies", "Contact details are present; shipping/returns details are not approved.", "Verify phone, email, address, response expectations and policies."),
    ])
    doc.add_heading("Recommended review order", level=2)
    for text in [
        "1. Product catalogue, pricing and availability",
        "2. Impact claims and partner/foundation descriptions",
        "3. Customer and artisan stories",
        "4. Corporate-gifting offer and operational promises",
        "5. Education articles, FAQs and policies",
        "6. Final brand tone, navigation and calls to action",
    ]:
        bullet(doc, text)

    page_title(doc, "02", "Global brand and interface copy", "Copy used across the header, mobile navigation, footer, metadata and help interface.")
    label_copy(doc, "Brand name", "KatranKaari")
    label_copy(doc, "Primary tagline", "Re-imagining textile waste")
    label_copy(doc, "Hero/footer tagline", "Made From What Remains.")
    label_copy(doc, "Site description", "Thoughtfully designed, functional products made from upcycled textile waste.")
    label_copy(doc, "Contact details", "Phone: +91 6351127795\nEmail: katrankaari21@gmail.com\nAddress: Jamnagar, Gujarat 361006\nSocial: Instagram — KatranKaari")
    label_copy(doc, "Primary navigation", "Shop · Corporate Gifting · About Us · Our Impact")
    label_copy(doc, "Secondary navigation", "Textile Waste Insights · Contact · FAQs · Track Order · Search · Account · Cart")
    label_copy(doc, "Footer calls to action", "Start a conversation · Get in touch · Reimagining textile waste")
    doc.add_heading("On-site help/chat working copy", level=2)
    label_copy(doc, "Opening message", "Hi! I can help you explore products, materials, gifting, collaborations, textile waste insights, orders and contact details.")
    label_copy(doc, "Suggested questions", "Shop products · Track an order · Corporate gifting · What are the products made from?")
    label_copy(doc, "Operational caveat", "Order tracking will be available when Shopify orders and customer accounts are connected. This development storefront does not create real orders yet.")
    label_copy(doc, "Policy caveat", "Shipping, returns and exchange policies are still awaiting approved client details, so we do not want to give you inaccurate information. Please contact KatranKaari for help with a specific query.")
    label_copy(doc, "Catalogue caveat", "Prices and availability are development values until the Shopify catalogue is connected.")

    page_title(doc, "03", "Homepage", "Current hero, category, process, collaboration, review and education-preview copy.")
    doc.add_heading("Hero carousel", level=2)
    label_copy(doc, "Slides 01–03 tagline", "Made From What Remains.")
    label_copy(doc, "Primary call to action", "Shop All")
    label_copy(doc, "Intro overlay", "Hello, welcome to KatranKaari store.")
    doc.add_heading("Discovery introduction", level=2)
    label_copy(doc, "Eyebrow", "Discover KatranKaari")
    label_copy(doc, "Headline", "A Little Less Waste. A Lot More Wonder.")
    label_copy(doc, "Supporting copy", "Discover everyday essentials, home accents, and meaningful gifts, beautifully reimagined from discarded textiles.")
    doc.add_heading("Category carousel", level=2)
    for name, items in [
        ("Bags & Totes", "Quilted Dual Tote · Patchwork Tote · Weekend Duffle · Crossbody Utility Bag"),
        ("Home & Living", "Cushion Covers · Table Mats & Runners · Oval Rugs · Curtains & Organisers"),
        ("Everyday Essentials", "Pouches & Organisers · Laptop & Tech · Kitchen & Dining · Fashion Accessories"),
        ("Gifting & More", "Shagun Envelopes · Curated Gift Sets · Corporate Gifting · Custom Orders"),
    ]:
        label_copy(doc, name, items)
    doc.add_heading("Circular process", level=2)
    label_copy(doc, "Section heading", "Our circular process\nFrom Textile Waste to Everyday Essentials\nA mindful journey that gives discarded textiles a second life.")
    for number, title, copy in [
        ("01", "Collect", "Sourcing textile waste from mills and communities."),
        ("02", "Sort", "Categorising fabrics for repurposing."),
        ("03", "Design & Craft", "Turning leftover textiles into functional, beautiful pieces."),
        ("04", "Produce", "Handmade by local women artisans."),
        ("05", "Renew", "Extending the life of textiles and reducing waste."),
    ]:
        label_copy(doc, f"{number} — {title}", copy)
    label_copy(doc, "Homepage impact figures — verify", "3.8 MT — of textile waste diverted from landfill\n13,000+ — products created and sold\n94* — women empowered through skills and jobs")
    label_copy(doc, "Impact call to action", "Know our impact")

    doc.add_heading("Collaboration callout", level=2)
    label_copy(doc, "Headline", "Good things happen when we come together.")
    label_copy(doc, "Supporting copy", "From creative partnerships to community action, let's make better use of what already exists.")
    label_copy(doc, "Collaboration routes", "Brands & businesses — Responsible merchandise and co-created collections.\nDesigners & creators — Material-led experiments and original collections.\nCommunity partners — Workshops, awareness and impact programmes.")
    label_copy(doc, "Call to action", "Collaborate with us")

    doc.add_heading("Customer stories — replace all", level=2)
    label_copy(doc, "Section copy", "Customer stories\nMade with care. Loved with purpose.\nThoughtful creations and everyday stories from the people who choose KatranKaari.")
    stories = [
        ("Aditi Sharma — Delhi", "Beautifully made and so meaningful. I love that it gives new life to discarded fabrics."),
        ("Rohan Mehta — Mumbai", "The quality is excellent, and the story behind each piece makes it feel even more special."),
        ("Sneha Iyer — Bengaluru", "A perfect blend of sustainability, craft and utility. Proud to support such a thoughtful brand."),
        ("Meera Kapoor — Pune", "Every stitch feels considered. It is the kind of everyday piece that only gets better with use."),
        ("Kabir Singh — Jaipur", "I bought one as a gift and immediately came back for another. The craft is beautiful."),
        ("Nandini Rao — Hyderabad", "Useful, thoughtful and unlike anything else in my collection. I use it every single day."),
        ("Arjun Malhotra — Gurugram", "The materials have real character, and the finishing is genuinely excellent."),
        ("Tara Desai — Ahmedabad", "It feels good to choose something practical that has been made with such care."),
    ]
    for name, quote in stories:
        label_copy(doc, name, f'“{quote}”')
    doc.add_paragraph("Client action: replace with verified, consented reviews or remove the section before publication.", style="Small Note")

    insights_heading = doc.add_heading("Insights preview", level=2)
    insights_heading.paragraph_format.page_break_before = True
    label_copy(doc, "Section copy", "Textile Waste Insights\nEvidence and ideas for a circular tomorrow.\nCurrent India and global evidence, material flows and practical ways to keep textiles in useful circulation.")
    label_copy(doc, "Cards", "India — India’s textile waste landscape\nThe world — Textiles in the global system\nCircularity — Keeping material value in motion")

    page_title(doc, "04", "Our Story page", "Narrative, foundation, milestone, artisan and process copy requiring approval.")
    label_copy(doc, "Hero", "Our Story\nEvery scrap has a story.\nTransforming textile waste into meaningful products and opportunities.")
    doc.add_heading("The KatranKaari journey", level=2)
    for copy in [
        "Every piece of fabric has a story, and at KatranKaari, we believe that its story should not end when it is discarded.",
        "Rooted in Jamnagar, Gujarat, KatranKaari emerged under Project Swachh Halar, a CSR initiative of Nayara Energy Limited, in collaboration with the CSR Trust for SDGs in India. Built on responsible waste management, circularity and community empowerment, the initiative reimagines discarded textiles as a resource filled with possibilities.",
        "Through dedicated skill development and hands-on training, women from local communities transform recovered fabrics into thoughtfully designed bags, accessories, home essentials and everyday products. From collecting and sorting discarded textiles to carefully designing and stitching each creation, every step reflects creativity, craftsmanship and conscious consumption.",
        "Beyond reducing textile waste, KatranKaari is committed to creating meaningful livelihood opportunities, nurturing entrepreneurship and supporting women on their journey towards financial independence.",
        "Our journey is about more than giving fabrics a second life. It is about changing the way we perceive waste, celebrating the hands that create, and building a future where sustainability and opportunity go hand in hand.",
        "Because what remains is not the end of a story, but the beginning of another.",
    ]:
        doc.add_paragraph(copy)
    doc.add_heading("The foundation behind us", level=2)
    label_copy(doc, "Section copy", "Rooted in Purpose. Built for Change.\nKatranKaari is rooted in a collective vision of responsible waste management, circularity and community empowerment. Its journey brings together organisations, communities and women artisans to reimagine the possibilities of discarded textiles.")
    foundation = [
        ("Project Swachh Halar — Our Foundation", "A community-driven initiative promoting responsible waste management, resource recovery and circularity."),
        ("Nayara Energy — CSR Initiative", "Supporting sustainable development and community empowerment through Project Swachh Halar."),
        ("CSR Trust for SDGs in India — Implementation Partner", "Working towards sustainable development through community-led environmental and social initiatives."),
        ("Jamnagar, Gujarat — Our Roots", "The community where discarded textiles are reimagined through craftsmanship and livelihood opportunities."),
    ]
    for title, copy in foundation:
        label_copy(doc, title, copy)
    doc.add_heading("Threads of our journey", level=2)
    label_copy(doc, "Section headline", "From an Initiative to a Purpose.")
    milestones = [
        ("01 — The Foundation", "Project Swachh Halar introduces a community-driven approach to responsible waste management."),
        ("02 — The Beginning", "The textile upcycling incubation centre in Jamnagar introduces vocational training and upcycling opportunities for local women."),
        ("03 — Creating Opportunities", "Women develop new skills and explore independent livelihood opportunities through textile craftsmanship."),
        ("04 — The KatranKaari Identity", "Discarded textiles are transformed into thoughtfully crafted, functional everyday products."),
    ]
    for title, copy in milestones:
        label_copy(doc, title, copy)
    doc.add_heading("Artisans and process", level=2)
    label_copy(doc, "Artisan section", "The hands behind every stitch\nMeet Our Artisans\nA community of skilled and passionate women who turn fabric waste into thoughtfully crafted, timeless products.\nTheir stories")
    label_copy(doc, "Portrait placeholders", "Three cards currently display: “Reserved for a new artisan portrait”.")
    for title, copy in [
        ("01 — Recover", "Discarded textiles are collected and sorted so their useful life can continue."),
        ("02 — Reimagine", "Colours, prints and offcuts are composed into practical new forms."),
        ("03 — Remake", "Women artisans bring every design to life with skill, care and precision."),
    ]:
        label_copy(doc, title, copy)
    label_copy(doc, "Closing call to action", "Be Part of Our Story\nChoose products that create impact for people and the planet.\nExplore Our Products")

    page_title(doc, "05", "Our Impact page", "Claims, supporting narrative and generic artisan profiles that require source and consent review.")
    label_copy(doc, "Hero", "Our impact\nWhat remains becomes possibility.\nKatranKaari brings circular design and community enterprise into the same frame—giving discarded textiles a useful next chapter and women new ways to create, earn and grow.\nSee the evidence")
    doc.add_heading("Historical impact ledger — verify all", level=2)
    label_copy(doc, "Section copy", "Project Swachh Halar · Jamnagar\nEvidence of materials and livelihoods moving forward.")
    impact_rows = [
        ("01 — 1 MT — Textile waste upcycled", "Approximately one metric tonne transformed into products during FY 2023–24."),
        ("02 — 75 — Women trained", "Women trained in textile upcycling and product-making over two years."),
        ("03 — 75 — Home-based businesses", "Trained women reported to have started independent home-based enterprises."),
        ("04 — ₹3,000 — Additional monthly income", "Approximate additional income reported per woman each month."),
    ]
    for title, copy in impact_rows:
        label_copy(doc, title, copy)
    label_copy(doc, "Scope note", "Figures describe the wider Project Swachh Halar incubation centre that gave rise to KatranKaari. Reporting periods vary by source.")
    label_copy(doc, "Linked sources", "Annual report 2023–24 · Project feature")
    doc.add_heading("Material in motion", level=2)
    label_copy(doc, "Section copy", "The outcome begins long before the final stitch.\nCraft turns irregular scraps into something dependable, useful and worth keeping.")
    for title, copy in [
        ("01 — Recover what remains", "Discarded and surplus textiles are gathered before they lose their value."),
        ("02 — Design with what exists", "Colour, texture and size guide the design instead of demanding new material."),
        ("03 — Make for everyday use", "Skilled hands turn the recovered fabric into useful products made to be used again and again."),
    ]:
        label_copy(doc, title, copy)
    doc.add_heading("Artisan stories — replace all", level=2)
    label_copy(doc, "Section copy", "The hands behind the impact\nArtisan stories\nEvery maker carries a story beyond the stitch.\nSkill, independence and possibility take a different shape in every pair of hands.")
    generic_artisans = [
        ("Artisan 01 — Learning the rhythm", "Cutting, stitching and finishing turn a new technique into a skill she can carry into home-based work.\n“A first stitch becomes a new way forward.”"),
        ("Artisan 02 — A craft of her own", "Each completed piece builds the confidence to suggest ideas, refine products and take greater ownership of the craft.\n“Confidence grows with every finished piece.”"),
        ("Artisan 03 — Making room to grow", "Flexible textile work creates another route to income and experience, grown at a pace that fits her life.\n“The possibility grows beyond the product.”"),
    ]
    for title, copy in generic_artisans:
        label_copy(doc, title, copy)
    label_copy(doc, "Closing call to action", "Keep the material moving\nChoose a product with another chapter already inside it.\nExplore products")

    page_title(doc, "06", "Shop and mock product catalogue", "Every product below is development data and must be replaced by the approved Shopify catalogue.")
    label_copy(doc, "Shop-page notice", "Mock catalogue\nProducts, pricing, availability and categories on this page are development fixtures. They will be replaced by Shopify catalogue data.")
    label_copy(doc, "Collection introductions", "Bags and Totes — Provisional grouping for carry products made with textile offcuts.\nHome and Living — Provisional grouping for functional textile pieces for the home.\nPouches and Organisers — Provisional grouping for small-format storage and organisation.\nEveryday Essentials — Provisional grouping for useful objects designed for daily routines.\nCorporate Gifting — Enquiry-led sets and customisation possibilities for organisations.")
    products = [
        ("Patchwork Tote", "Bags and Totes", "₹1,450", "Development fixture for a roomy tote assembled from recovered textile offcuts.", ["Demo material details", "Demo dimensions", "Care information pending approval"], "Assorted patchwork · SKU DEMO-TOTE-01 · Quantity 12 · Available"),
        ("Quilted Cushion Cover", "Home and Living", "₹950", "Development fixture for a textured cushion cover made with layered textile remnants.", ["Demo size: 16 × 16 in", "Insert not included", "Final composition pending approval"], "16 × 16 in · SKU DEMO-CUSH-16 · Quantity 8 · Available"),
        ("Patchwork Table Runner", "Kitchen and Dining", "₹1,250", "Development fixture for a table runner composed from colour-sorted fabric pieces.", ["Demo dimensions", "One-of-a-kind colour variation", "Care information pending approval"], "Standard · SKU DEMO-RUN-01 · Quantity 5 · Available"),
        ("Drawstring Utility Pouch", "Pouches and Organisers", "₹450–₹650", "Development fixture for a multipurpose drawstring pouch made from recovered fabric.", ["Demo product specification", "Assorted textile placement", "Final sizing pending approval"], "Small: DEMO-POUCH-S, qty 20, ₹450 · Large: DEMO-POUCH-L, qty 10, ₹650"),
        ("Fabric Desk Organiser", "Pouches and Organisers", "₹875", "Development fixture for a structured organiser using reclaimed textile panels.", ["Demo product specification", "Compartments pending confirmation", "Final material mix pending approval"], "Standard · SKU DEMO-ORG-01 · Quantity 6"),
        ("Patchwork Pot Cover", "Kitchen and Dining", "₹550", "Development fixture for a textile pot cover designed from small fabric remnants.", ["Decorative use", "Demo dimensions", "Final care information pending approval"], "Standard · SKU DEMO-POT-01 · Out of stock"),
        ("Celebration Bunting", "Accessories", "₹725", "Development fixture for reusable bunting assembled from coordinated textile offcuts.", ["Demo length", "Assorted textile mix", "Final packaging pending approval"], "Standard · SKU DEMO-BUNT-01 · Quantity 14"),
        ("Curated Corporate Gift Set", "Corporate Gifting", "Enquiry only", "Development fixture representing a configurable, enquiry-based gifting set.", ["Contents tailored by enquiry", "Minimum quantity pending confirmation", "Customisation subject to feasibility"], "Enquiry only · SKU DEMO-CORP-01"),
    ]
    for product in products:
        add_product(doc, *product)
    doc.add_heading("Product-page interface copy", level=2)
    label_copy(doc, "Working labels", "Demo product · Variant · Add to demo cart · Currently unavailable · Make a corporate enquiry · Product details")
    label_copy(doc, "Review placeholder", "Customer feedback\nReviews & ratings\nNo verified customer reviews are connected yet. Ratings and reviews will appear here only after an approved Shopify-compatible review source is configured.")

    page_title(doc, "07", "Corporate gifting and custom orders", "Current proposition, process and enquiry-form language for client approval.")
    label_copy(doc, "Hero", "Corporate gifting & custom orders\nGifts that carry a better story.\nThoughtfully made textile gifts for teams, clients, events and partnerships—designed to be useful, memorable and rooted in purpose.\nStart an enquiry · Explore products")
    label_copy(doc, "Hero proof points", "Recovered textile stories · Thoughtful everyday utility · Rooted in Jamnagar")
    label_copy(doc, "Ways to work together", "Gifting that feels useful, personal and considered.\nBegin with the occasion and the people receiving it. We’ll explore a direction that makes sense for your requirement and the materials available.")
    possibilities = [
        ("01 — Teams & clients", "Useful gifts that recognise the people who help your organisation move forward."),
        ("02 — Events & milestones", "Thoughtful gifting possibilities for celebrations, gatherings and meaningful occasions."),
        ("03 — Curated gift sets", "A considered mix of practical textile products shaped around your brief and audience."),
        ("04 — Custom possibilities", "Selected products, details and presentation can be explored for suitable quantities and timelines."),
    ]
    for title, copy in possibilities:
        label_copy(doc, title, copy)
    label_copy(doc, "Process heading", "A simple, collaborative process\nFrom your brief to a thoughtful gifting direction.")
    process = [
        ("01 — Share your brief", "Tell us the occasion, quantity, timeline and what you want the gift to communicate."),
        ("02 — Curate the direction", "We explore suitable products and combinations around your requirement."),
        ("03 — Refine the details", "Together, we review the selection and any feasible custom touches."),
        ("04 — Prepare with care", "Once confirmed, the gifting direction is prepared around the agreed brief."),
    ]
    for title, copy in process:
        label_copy(doc, title, copy)
    label_copy(doc, "Enquiry introduction", "Start a conversation\nTell us what you are planning.\nShare the essentials of your gifting requirement. Your email app will open with a prepared enquiry that you can review before sending.\nPrefer a general conversation?")
    label_copy(doc, "Form fields", "Name · Company / organisation · Email · Phone (optional) · Estimated quantity · Product interest · Customisation requirements (optional) · Tell us about your requirement")
    label_copy(doc, "Product-interest options", "Bags and totes · Home and living · Pouches and organisers · Curated mixed set · Not sure yet")
    label_copy(doc, "Submit message", "Prepare enquiry · Opening your email app with a prepared enquiry…")

    page_title(doc, "08", "Contact page", "Current contact proposition, details, form labels and corporate-gifting prompt.")
    label_copy(doc, "Hero", "Contact KatranKaari\nLet's make something meaningful.\nHave a product question, a collaboration in mind or a gifting requirement? Tell us what you are planning and our team will help you take the next step.\nProducts · Collaborations · Corporate gifting")
    label_copy(doc, "Contact details", "Email Us — katrankaari21@gmail.com\nCall Us — +91 6351127795\nOur Studio — Jamnagar, Gujarat 361006")
    label_copy(doc, "Form heading", "Send Us a Message")
    label_copy(doc, "Form placeholders", "Your Name * · Your Email * · Phone Number · Your Message *")
    label_copy(doc, "Reason options", "I'm reaching out for… · Product enquiry · Corporate gifting · Collaboration · General enquiry")
    label_copy(doc, "Submit button", "Send Message")
    label_copy(doc, "Closing prompt", "Planning a larger order?\nExplore corporate gifting and custom possibilities.\nCorporate gifting")

    page_title(doc, "09", "Textile Waste Insights", "Research-led working copy. All figures and interpretations should remain tied to the listed primary sources.")
    label_copy(doc, "Hero", "Textile Waste Insights\nWhat we discard still holds value.\nA clear view of textile waste in India and around the world—where it comes from, where it goes and why keeping materials in motion matters.\nBegin with the basics")
    label_copy(doc, "Hero fact", "Waste is a material problem—and a design opportunity.\n92M")
    label_copy(doc, "Start here", "Not all waste begins in the wardrobe.\nTextile waste appears across the entire material journey.\nIt includes more than old clothes. Waste is created while fibres are spun, fabric is cut, products are made, goods remain unsold and textiles are discarded after use. Each stream needs a different recovery route.")
    for title, copy in [
        ("01 — Pre-consumer", "Fibres, yarn, fabric offcuts, rejected pieces and surplus generated before a textile product reaches the person who will use it."),
        ("02 — Post-consumer", "Clothing and household textiles discarded after use, whether because they are worn, damaged, unwanted or no longer needed."),
        ("03 — Imported & traded", "Used clothing, rags and textile waste that move across borders or between sorting and recycling markets before finding another use."),
    ]:
        label_copy(doc, title, copy)
    doc.add_heading("The India view — verify current source wording", level=2)
    label_copy(doc, "Section copy", "Ministry of Textiles · February 2026\nIndia’s challenge is large. So is its recovery knowledge.\nIndia’s first comprehensive government mapping estimates 7.073 million tonnes of textile waste generated each year. The country already has deep reuse, repair and mechanical-recycling networks, but sorting quality, traceability and higher-value recycling remain major gaps.")
    label_copy(doc, "Statistics", "7.07M tonnes/year — Textile waste generated in India\n2.97M tonnes/year — Pre-consumer waste\n4.10M tonnes/year — Post-consumer waste\n1.90M tonnes/year — Incinerated or landfilled\n42% pre-consumer · 58% post-consumer")
    doc.add_heading("The global view — verify current source wording", level=2)
    label_copy(doc, "Section copy", "The system produces more than waste.\nTextile impacts accumulate across raw material production, dyeing, manufacturing, transport, use and disposal. Waste is the visible end of a much longer resource story.")
    label_copy(doc, "Statistics", "92M tonnes of textile waste each year\n2–8% of global greenhouse gas emissions\n8% of fibres came from recycled sources in 2023; textile-to-textile recycling accounted for less than 1%\n9% of ocean microplastic pollution linked to textiles")
    doc.add_heading("Why the problem persists", level=2)
    for title, copy in [
        ("Materials are mixed", "A single product may combine cotton, polyester, elastane, trims, coatings and thread. Separating them at end of use can be technically difficult."),
        ("Sorting decides value", "Colour, fibre, condition and contamination determine whether a textile can be reused, upcycled, recycled or only downcycled."),
        ("Collection is fragmented", "Textiles move through households, factories, charities, traders and informal networks. Without traceability, useful material can be lost or misclassified."),
        ("Recycling is not one answer", "Mechanical and chemical recycling each have limits. Keeping a product in use, repairing it or reusing intact fabric can preserve more of its existing value."),
    ]:
        label_copy(doc, title, copy)
    doc.add_heading("From insight to action", level=2)
    label_copy(doc, "Section copy", "A better material journey starts before the bin.\nWaste systems matter, but so do the choices made when a textile is designed, purchased, cared for and sorted.")
    for title, copy in [
        ("01 — Know the material", "Clear composition and origin information makes later sorting and recovery more possible."),
        ("02 — Keep it in use", "Care, repair, resale, sharing and reuse extend the useful life already built into a textile."),
        ("03 — Sort before mixing", "Separating clean textiles by condition, colour and fibre protects their potential next use."),
        ("04 — Design another chapter", "Upcycling uses the form, colour and character already present to create a thoughtful new object."),
    ]:
        label_copy(doc, title, copy)
    label_copy(doc, "Listed evidence", "Ministry of Textiles, Government of India — Mapping of Textile Waste Value Chain in India — February 2026\nUNEP & UN-Habitat — International Day of Zero Waste 2025 — Key Messages\nUnited Nations Environment Programme — Minimizing fashion’s environmental footprint — UNEP Annual Report 2025")
    label_copy(doc, "Scope note", "Figures reflect the listed publications and their methodologies. Global and India estimates describe different scopes and should not be directly subtracted or combined.")

    page_title(doc, "10", "Sample education articles", "These three article pages are explicitly marked as sample content and must be replaced before publication.")
    sample_articles = [
        ("Understanding textile waste", "A sample outline for future educational content about where textile waste comes from.", "What this article will cover", "This sample page marks the intended structure for client-approved educational copy and sourced facts.", "Sources required", "Before publication, claims and figures must be reviewed and supported by approved primary sources."),
        ("From offcut to useful object", "A sample material story showing how transformation content can be structured.", "Material selection", "Final copy will document the approved sourcing, sorting and design process.", "Transformation", "Process details and imagery remain placeholders until the client approves them."),
        ("A practical introduction to circularity", "A sample framework for explaining circular design without unsupported claims.", "The intended lesson", "This page will connect circular design principles to KatranKaari's verified practices.", "Editorial review", "Examples, definitions and citations will be added after content review."),
    ]
    for title, excerpt, h1, c1, h2, c2 in sample_articles:
        doc.add_heading(title, level=2)
        label_copy(doc, "Excerpt", excerpt)
        label_copy(doc, h1, c1)
        label_copy(doc, h2, c2)

    page_title(doc, "11", "FAQs", "Current support answers. Policies and operational promises require final client approval.")
    label_copy(doc, "Hero", "Answers, thoughtfully gathered\nEverything you may want to know.\nFrom recovered materials and product care to gifting and customer support, find the clearest answer here.\nNeed a direct answer? Our team can help with a specific product, order or collaboration.")
    faqs = [
        ("What makes KatranKaari products different?", "KatranKaari gives discarded and surplus textiles a useful next chapter through thoughtful design and skilled craftsmanship. Each piece balances everyday function with the natural character of recovered fabric."),
        ("Will my product look exactly like the photograph?", "Recovered textiles naturally vary in print, colour placement and texture. The overall design and function remain consistent, while small variations make every piece distinct."),
        ("How should I care for my KatranKaari product?", "Please follow any care guidance supplied with the product. If you are unsure, share the product name or a photograph with our team before washing so we can guide you for that specific material."),
        ("How can I check whether a product is available?", "Explore the current selection in our shop. If a style, colour or quantity is not listed, contact us and the team can help you check what may be available."),
        ("Do you accept corporate or bulk orders?", "Yes. KatranKaari welcomes corporate gifting and larger-order enquiries. Share your preferred quantity, timeline and gifting occasion through our corporate gifting page so the team can suggest suitable possibilities."),
        ("Can KatranKaari products be customised?", "Customisation can be explored for selected gifting and larger-order requirements. What is possible depends on the product, recovered materials, quantity and timeline, so each request is reviewed individually."),
        ("Where are KatranKaari products made?", "KatranKaari is rooted in Jamnagar, Gujarat, where recovered textiles are reimagined through local craftsmanship and livelihood opportunities for women artisans."),
        ("How does KatranKaari work with textile waste?", "Discarded and surplus textiles are recovered, sorted and considered for their colour, texture and size. Skilled makers then transform suitable material into functional products designed for continued everyday use."),
        ("Where can I learn more about the initiative?", "Visit Our Story to understand KatranKaari’s roots and explore the Impact page for the wider Project Swachh Halar context, material journey and artisan stories."),
        ("How can I contact KatranKaari?", "Email katrankaari21@gmail.com, call +91 6351127795, or use the message form on our Contact page. The team can help with products, gifting, collaborations and order-related questions."),
        ("I need help with an existing order. What should I share?", "Send us your name, contact details, order reference and a short description of what you need help with. Photographs are useful when your question relates to a particular product."),
        ("Where can I get help with shipping, returns or exchanges?", "Please contact the KatranKaari team with your order details. They will confirm the applicable shipping information and guide you through the options available for your specific order."),
    ]
    for q, a in faqs:
        question = doc.add_paragraph(q, style="Copy Label")
        question.paragraph_format.space_before = Pt(2)
        answer = doc.add_paragraph(a)
        answer.paragraph_format.space_after = Pt(2)
        answer.paragraph_format.line_spacing = 1.0
    closing_label = doc.add_paragraph("Closing call to action", style="Copy Label")
    closing_label.paragraph_format.space_before = Pt(2)
    closing = doc.add_paragraph("Still curious? Tell us what you are looking for and we’ll help you find the answer.\nJamnagar, Gujarat 361006 · Ask KatranKaari")
    closing.paragraph_format.space_after = Pt(2)
    closing.paragraph_format.line_spacing = 1.0

    page_title(doc, "12", "Commerce and system placeholders", "Development-only messages that should disappear or be rewritten when live integrations are connected.")
    label_copy(doc, "Customer account", "Shopify integration pending\nCustomer account\nSecure sign-in, saved addresses, order history and account management will be enabled through Shopify’s Customer Account API. No placeholder account is created in this phase.\nContinue shopping · Contact us")
    label_copy(doc, "Order tracking", "Order system pending\nTrack your order\nOrder tracking will become available when Shopify orders and customer authentication are connected. The development storefront does not create real orders.\nContact KatranKaari · View FAQs")
    label_copy(doc, "Cart", "Development cart\nYour cart\nLoading saved demo cart…\nYour demo cart is empty\nBrowse the mock catalogue to test the local cart flow.\nBrowse demo products")
    label_copy(doc, "Cart summary", "Summary · Subtotal\nTaxes, shipping and checkout are unavailable in mock mode. Shopify-hosted checkout will be connected in a later phase.\nCheckout unavailable in demo")
    label_copy(doc, "404 page", "404\nPage not found\nThe page may have moved, or the catalogue handle does not exist in the current fixtures.\nReturn home")
    label_copy(doc, "Error page", "Something went wrong\nWe could not load this page.\nTry loading the page again. No order or form data has been submitted.\nTry again")

    doc.add_heading("Client handoff checklist", level=2)
    for item in [
        "Approved product catalogue with names, handles, descriptions, variants, prices, stock and care instructions",
        "Approved customer testimonials with names, locations, exact wording and consent",
        "Approved artisan portraits, biographies, quotes and consent",
        "Signed-off impact figures with scope, reporting period and primary source",
        "Shipping, delivery, returns, exchanges, cancellations and payment policies",
        "Confirmed corporate-gifting minimums, lead times, customisation limits and fulfilment language",
        "Final contact details, studio wording and response expectations",
        "Approved education articles and citations",
    ]:
        bullet(doc, item)

    doc.add_paragraph()
    closing = doc.add_paragraph("END OF CURRENT CONTENT INVENTORY")
    closing.alignment = WD_ALIGN_PARAGRAPH.CENTER
    closing.runs[0].font.bold = True
    closing.runs[0].font.size = Pt(8)
    closing.runs[0].font.color.rgb = RGBColor.from_string(ROSE)

    doc.save(OUT_PATH)
    return OUT_PATH


if __name__ == "__main__":
    print(build())
