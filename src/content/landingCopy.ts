export type Locale = "th" | "en";

export type LandingCopy = {
  meta: {
    title: string;
    description: string;
  };
  nav: {
    why: string;
    features: string;
    results: string;
    faq: string;
    languageToggle: string;
  };
  cta: {
    demo: string;
    line: string;
    trial: string;
  };
  hero: {
    eyebrow: string;
    headline: string;
    subheadline: string;
    microcopy: string;
    chips: string[];
  };
  pain: {
    headline: string;
    lead: string;
    items: Array<{ title: string; body: string }>;
  };
  featureSection: {
    solutionHeadline: string;
    solutionLead: string;
    solutions: Array<{ title: string; body: string }>;
    featureHeadline: string;
    features: Array<{ title: string; feature: string; benefit: string }>;
    resultsHeadline: string;
    beforeLabel: string;
    afterLabel: string;
    resultsRows: Array<{ before: string; after: string }>;
  };
  appPreview: {
    headline: string;
    subheadline: string;
    previews: Array<{
      image: string;
      alt: string;
      caption: string;
      features: string[];
    }>;
  };
  faq: {
    headline: string;
    items: Array<{ q: string; a: string }>;
  };
  finalCta: {
    headline: string;
    lead: string;
  };
  footer: {
    brandLine: string;
  };
};

export const landingCopy: Record<Locale, LandingCopy> = {
  th: {
    meta: {
      title: "DealDroid | AI Chatbot สำหรับร้านรีเซลล์ที่มีแชทจำนวนมาก",
      description:
        "ลดภาระทีมแอดมิน เพิ่มยอดขายด้วย AI ตอบแชท 24/7 แบบเข้าใจสินค้าเชิงลึกด้วย LLM + RAG เหมาะสำหรับร้านที่รับแชทมากกว่า 100K ต่อเดือน",
    },
    nav: {
      why: "ทำไมต้อง DealDroid",
      features: "ฟีเจอร์เด่น",
      results: "ผลลัพธ์ธุรกิจ",
      faq: "คำถามที่พบบ่อย",
      languageToggle: "English",
    },
    cta: {
      demo: "จองเดโม",
      line: "คุยผ่าน LINE OA",
      trial: "เริ่มทดลองใช้ฟรี",
    },
    hero: {
      eyebrow: "ออกแบบมาสำหรับร้านรีเซลล์ที่แชทหนัก",
      headline: "เปลี่ยนทุกบทสนทนาให้เป็นยอดขาย แม้นอกเวลางาน",
      subheadline:
        "AI Chatbot สำหรับร้านแชทเยอะ ตอบสินค้าแม่นด้วย LLM + RAG เทียบสินค้าได้ไว และส่งต่อลูกค้าพร้อมซื้อให้ทีมขายทันที",
      microcopy: "เริ่มได้เร็วจากเคสสินค้าจริงของร้านคุณ",
      chips: [
        "รองรับ 100K+ แชท/เดือน",
        "ตอบไว 24/7",
        "แม่นยำด้วย RAG",
        "ส่งต่อทีมขายแบบไร้รอยต่อ",
      ],
    },
    pain: {
      headline:
        "ถ้าเจอสิ่งเหล่านี้ทุกวัน คุณกำลังเสียทั้งต้นทุนและโอกาสขายแบบไม่รู้ตัว",
      lead: "หลายร้านเสียยอดเพราะตอบช้า ตอบไม่คงที่ และทีมล้าจากแชทปริมาณสูง",
      items: [
        {
          title: "ลูกค้าทักหลัง 5 โมง แต่ไม่มีคนตอบ",
          body: "ช่วงที่ลูกค้าพร้อมซื้อ กลับไม่มีคนตอบ ทำให้เสียออเดอร์",
        },
        {
          title: "ทีมแอดมินรับอารมณ์ลูกค้าจนหมดไฟ",
          body: "แชทยากต่อเนื่องทำให้คุณภาพคำตอบตก แม้ทีมจะพยายามเต็มที่",
        },
        {
          title: "พนักงานเข้าออกบ่อย ต้องเทรนซ้ำไม่จบ",
          body: "ต้องสอนงานซ้ำบ่อย และคุมมาตรฐานตอบแชทยาก",
        },
        {
          title: "ลูกค้าลังเลเพราะเทียบสินค้าไม่ทันใจ",
          body: "ตอบช้าหรือข้อมูลไม่ครบ ลูกค้าหลุดก่อนจ่ายเงิน",
        },
      ],
    },
    featureSection: {
      solutionHeadline:
        "AI ชั้นเดียวที่ช่วยทั้งลดภาระทีม และเพิ่มความเร็วในการปิดขาย",
      solutionLead:
        "ไม่ต้องทำ flow ซับซ้อน ระบบตอบจากข้อมูลจริงของร้านคุณแบบเป็นธรรมชาติ",
      solutions: [
        {
          title: "ครอบคลุมการขายตลอด 24 ชั่วโมง",
          body: "ลูกค้าเข้ามาเวลาไหนก็ได้คำตอบทันที เก็บทุกโอกาสขายแม้นอกเวลาทีมงาน",
        },
        {
          title: "ตอบสินค้าได้แม่นจาก LLM + RAG",
          body: "ตอบสเปก จุดต่าง รุ่นที่เหมาะ และเงื่อนไขต่างๆ ได้ชัดเจนสม่ำเสมอ",
        },
        {
          title: "คุยเป็นธรรมชาติ เหมือนทีมงานจริง",
          body: "เข้าใจบริบทการถามต่อเนื่อง ลดความรู้สึกว่าเป็นบอทสคริปต์แข็งๆ",
        },
        {
          title: "ส่งต่อ Human Sales อย่างเนียน",
          body: "เมื่อลูกค้าพร้อมซื้อ ระบบส่งต่อพร้อมบริบทให้ทีมปิดดีลได้เร็วขึ้น",
        },
      ],
      featureHeadline:
        "ฟีเจอร์ที่ผูกกับผลลัพธ์ธุรกิจจริง ไม่ใช่เดโมสวยอย่างเดียว",
      features: [
        {
          title: "Product Brain ด้วย LLM + RAG",
          feature: "เรียนรู้จากแคตตาล็อก FAQ และเอกสารจริงของร้าน",
          benefit: "ลูกค้าได้คำตอบแม่นและตัดสินใจซื้อเร็วขึ้น",
        },
        {
          title: "รองรับแชทปริมาณสูง",
          feature: "ออกแบบมาสำหรับช่วงพีค แคมเปญ และร้านที่แชทหนาแน่น",
          benefit: "ลดการพลาดลูกค้าในช่วงที่พร้อมซื้อ",
        },
        {
          title: "ตอบเทียบสินค้าได้ทันที",
          feature: "อธิบายความต่างสินค้าแบบเข้าใจง่ายตามคำถามลูกค้า",
          benefit: "ลดความลังเลและเพิ่มโอกาสปิดการขาย",
        },
        {
          title: "รักษาโทนแบรนด์ + ส่งต่อทีมขาย",
          feature:
            "ตอบในมาตรฐานแบรนด์เดียวกัน และส่งต่อเมื่อถึงจังหวะปิดการขาย",
          benefit: "ทีมขายทำงานง่ายขึ้น ไม่ต้องเริ่มคุยใหม่",
        },
      ],
      resultsHeadline: "ผลลัพธ์ที่ร้านค้าวัดผลได้จริง",
      beforeLabel: "ก่อนใช้ DealDroid",
      afterLabel: "หลังใช้ DealDroid",
      resultsRows: [
        {
          before: "ลูกค้ารอตอบเฉลี่ย 30+ นาที หลังหมดกะ",
          after: "ลูกค้าได้คำตอบภายใน 5 วินาที ตลอด 24 ชม.",
        },
        {
          before: "เทรนพนักงานใหม่ซ้ำทุกเดือน คุณภาพไม่คงที่",
          after: "คุณภาพคำตอบคงที่ ไม่กระทบจากพนักงานลาออก",
        },
        {
          before: "ทีมแอดมินล้า จากแชทนับพันต่อวัน",
          after: "ทีมโฟกัสแค่เคสที่ต้องใช้คนปิดการขาย",
        },
        {
          before: "ลูกค้าหลุด 40% เพราะเทียบสินค้าไม่ทัน",
          after: "ตอบเปรียบเทียบได้ทันที ลดการหลุดของลูกค้า",
        },
      ],
    },
    faq: {
      headline: "คำถามที่พบบ่อย",
      items: [
        {
          q: "DealDroid รองรับมากกว่า 100K แชทต่อเดือนได้จริงไหม?",
          a: "ได้ ระบบถูกออกแบบมาเพื่อร้านที่มีปริมาณแชทสูงและต้องการคุณภาพการตอบที่สม่ำเสมอ",
        },
        {
          q: "ต่างจากบอทแบบ Dialog Flow เดิมอย่างไร?",
          a: "DealDroid ใช้ LLM + RAG ตอบจากข้อมูลจริง จึงยืดหยุ่นกว่า ลดภาระการดูแล flow จำนวนมาก",
        },
        {
          q: "หากต้องปิดการขายโดยทีมคน ส่งต่ออย่างไร?",
          a: "ระบบสามารถส่งต่อพร้อมบริบทบทสนทนา ทำให้ทีม Sales รับช่วงและปิดดีลต่อได้ทันที",
        },
        {
          q: "ปรับโทนคำตอบให้ตรงแบรนด์ได้ไหม?",
          a: "ได้ สามารถกำหนดแนวทางภาษาพร้อมกรอบการตอบเพื่อให้สื่อสารตรงตามมาตรฐานแบรนด์",
        },
      ],
    },
    appPreview: {
      headline: "เห็นตัวจริง DealDroid ทำงาน",
      subheadline: "ผลลัพธ์ที่ได้จากการลงมือใช้งานจริง",
      previews: [
        {
          image: "/images/chats_page.png",
          alt: "DealDroid chat management showing customers, conversations, and admin control panel",
          caption: "Admin Dashboard - Manage All Conversations",
          features: [
            "ใส่สินค้า ระบบ AI เรียนรู้อัตโนมัติ",
            "ลูกค้าถามเข้ามา ตอบได้ทันทีเหมือนคนจริง",
            "Admin คุมทุก conversation ได้อย่างชัดเจน",
          ],
        },
        {
          image: "/images/intent_page.png",
          alt: "Intent configuration page showing context settings and AI response templates",
          caption: "Intent Management - Control AI Behavior",
          features: [
            "กำหนด Intent สำหรับแต่ละสถานการณ์ได้",
            "AI เลือกตอบอย่างไรให้ตรงกับบริบท",
            "ตั้งค่าเงื่อนไข ตรวจสอบ และบันทึกได้",
          ],
        },
        {
          image: "/images/product_page.png",
          alt: "Product recommendation interface showing AI-powered product suggestions",
          caption: "Smart Recommendations - Drive Sales",
          features: [
            "AI recommend สินค้าตามบริบท conversation",
            "ส่งรูปให้ AI วิเคราะห์และแนะนำทางเลือก",
            "ลูกค้าเห็น product + ราคา พร้อมซื้อเลย",
          ],
        },
      ],
    },

    finalCta: {
      headline: "พร้อมขยายยอดขาย โดยไม่ต้องขยายทีมแอดมินหรือยัง?",
      lead: "ดูเดโมสั้น ๆ แล้วรู้ทันทีว่า DealDroid เข้ากับร้านคุณแค่ไหน",
    },
    footer: {
      brandLine:
        "DealDroid - พาร์ทเนอร์ AI สำหรับร้านรีเซลล์ที่ต้องการโตแบบยั่งยืน",
    },
  },
  en: {
    meta: {
      title: "DealDroid | AI Chatbot for High-Volume Reseller Stores",
      description:
        "Reduce admin workload and increase conversion with 24/7 AI replies powered by LLM + RAG. Built for stores handling over 100K chats per month.",
    },
    nav: {
      why: "Why DealDroid",
      features: "Features",
      results: "Results",
      faq: "FAQ",
      languageToggle: "ไทย",
    },
    cta: {
      demo: "Book a Demo",
      line: "Contact via LINE OA",
      trial: "Start Free Trial",
    },
    hero: {
      eyebrow: "Built for High-Volume Reseller Stores",
      headline: "Turn Every Customer Chat Into Sales, Even After Office Hours",
      subheadline:
        "DealDroid is an advanced AI chatbot for stores with heavy chat traffic. Powered by LLM + RAG, it answers product details naturally, compares items accurately, and hands high-intent buyers to your sales team without complex dialog flow setup.",
      microcopy:
        "Skip complicated chatbot setup projects. Start with a practical walkthrough using your real product scenario.",
      chips: [
        "100K+ chats/month ready",
        "24/7 instant replies",
        "RAG-powered accuracy",
        "Seamless human handoff",
      ],
    },
    pain: {
      headline:
        "If this is your daily reality, you are losing margin and sales momentum",
      lead: "Most large stores do not lose sales from low demand. They lose sales from slow replies, inconsistent answers, and exhausted support teams.",
      items: [
        {
          title: "Customers ask after 5 PM but your team is offline",
          body: "Prime buying moments are missed simply because no one is available to answer instantly.",
        },
        {
          title: "Admins absorb customer pressure all day",
          body: "Emotion-heavy chats reduce response quality during high-volume periods.",
        },
        {
          title: "High turnover creates endless retraining",
          body: "Your team spends time rebuilding consistency instead of moving deals forward.",
        },
        {
          title: "Comparison questions are answered too slowly",
          body: "Buyers hesitate and drop before checkout when details are delayed or unclear.",
        },
      ],
    },
    featureSection: {
      solutionHeadline:
        "One AI layer that reduces pressure and drives conversion",
      solutionLead:
        "No rigid conversation flow building. DealDroid responds naturally from your real product and knowledge data.",
      solutions: [
        {
          title: "Always-On Sales Coverage",
          body: "Instant responses at any hour so after-hours shoppers stay engaged.",
        },
        {
          title: "Accurate Product Responses with LLM + RAG",
          body: "Clear, reliable answers for specs, comparisons, and decision-critical details.",
        },
        {
          title: "Human-Like Conversation Quality",
          body: "Understands context and follows natural conversation flow.",
        },
        {
          title: "Seamless Handoff to Human Sales",
          body: "Transfers with context when intent is high, so closers can move quickly.",
        },
      ],
      featureHeadline:
        "Capabilities tied to business outcomes, not just demo visuals",
      features: [
        {
          title: "LLM + RAG Product Brain",
          feature: "Learns from your catalog, FAQ, and internal docs",
          benefit:
            "Customers get clearer answers and make purchase decisions faster",
        },
        {
          title: "High-Volume Chat Performance",
          feature: "Built for peak campaigns and heavy daily chat traffic",
          benefit: "Reduce missed opportunities when buying intent is highest",
        },
        {
          title: "Natural Product Comparison Replies",
          feature: "Explains differences based on real customer questions",
          benefit: "Lower hesitation and improve checkout progression",
        },
        {
          title: "Brand Voice Consistency + Handoff",
          feature:
            "Keeps tone aligned and escalates at the right closing moment",
          benefit:
            "Your sales team closes faster without restarting the conversation",
        },
      ],
      resultsHeadline: "Measurable Results from Real Stores",
      beforeLabel: "Before DealDroid",
      afterLabel: "After DealDroid",
      resultsRows: [
        {
          before: "Customers wait 30+ minutes after shifts end",
          after: "Customers get answers within 5 seconds, 24/7",
        },
        {
          before: "Retraining repeats with every new admin hire",
          after: "Response quality stays stable regardless of turnover",
        },
        {
          before: "Admin team burns out from thousands of daily chats",
          after: "Team focuses only on high-value closing conversations",
        },
        {
          before: "40% of buyers drop off due to slow product comparisons",
          after: "Instant comparisons reduce customer drop-off significantly",
        },
      ],
    },
    faq: {
      headline: "Frequently asked questions",
      items: [
        {
          q: "Can DealDroid reliably handle over 100K chats per month?",
          a: "Yes. It is designed for high-volume stores that need consistent response quality at scale.",
        },
        {
          q: "How is this different from flow-based chatbot tools?",
          a: "DealDroid uses LLM + RAG to answer from real data, reducing maintenance burden and improving flexibility.",
        },
        {
          q: "How does human sales handoff work?",
          a: "It transfers chats with full context when buying intent is detected, so sales can close efficiently.",
        },
        {
          q: "Can replies follow our brand policy and tone?",
          a: "Yes. You can define response guardrails and tone standards to match your brand.",
        },
      ],
    },
    appPreview: {
      headline: "See DealDroid In Action",
      subheadline: "Real results from teams like yours",
      previews: [
        {
          image: "/images/chats_page.png",
          alt: "DealDroid chat management showing customers, conversations, and admin control panel",
          caption: "Admin Dashboard - Manage All Conversations",
          features: [
            "Add products once. AI learns them automatically.",
            "Customers get answers instantly, as naturally as talking to your team.",
            "Admins see every conversation with full context and control.",
          ],
        },
        {
          image: "/images/intent_page.png",
          alt: "Intent configuration page showing context settings and AI response templates",
          caption: "Intent Management - Control AI Behavior",
          features: [
            "Define intents for every customer scenario",
            "AI chooses the right response for each context",
            "Set guardrails, review, and refine continuously",
          ],
        },
        {
          image: "/images/product_page.png",
          alt: "Product recommendation interface showing AI-powered product suggestions",
          caption: "Smart Recommendations - Drive Sales",
          features: [
            "AI recommends products based on customer needs",
            "Analyze product images to troubleshoot or suggest alternatives",
            "Customers see products + prices ready to buy",
          ],
        },
      ],
    },
    finalCta: {
      headline: "Ready to scale sales without scaling admin headcount?",
      lead: "See how DealDroid fits your product structure and sales workflow in a practical, action-focused demo.",
    },
    footer: {
      brandLine:
        "DealDroid - AI partner for reseller teams that want sustainable growth",
    },
  },
};
