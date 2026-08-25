/**
 * Engineering Portfolio - Circuit Sense Forge
 * Vanilla JavaScript for Mobile Navigation, Scroll Interactions & Bilingual (EN / ID) Support
 */

// Comprehensive Translation Dictionary
const translations = {
  en: {
    meta_title: "Electrical & Automation Engineer — Embedded, IIoT, BMS",
    
    // Navbar
    nav_work: "Work",
    nav_expertise: "Expertise",
    nav_about: "About",
    nav_contact: "Contact",
    nav_connect: "Let's Connect",
    lang_label: "Language:",

    // Hero Section
    status_online: "System online",
    status_mode: "Engineering mode: active",
    hero_title: `Engineering the connection between the <span class="text-primary text-glow">physical</span> and <span class="text-signal">digital</span> world.`,
    hero_desc: "Electrical & industrial automation engineer building instrumented, connected systems — from sensor signal to control logic to dashboard.",
    tag_embedded: "Embedded Systems",
    tag_iiot: "Industrial IoT",
    tag_automation: "Automation",
    tag_bacs: "BACS / BMS",
    tag_plc: "PLC",
    tag_control: "Control Systems",
    btn_view_projects: "View Projects",
    btn_connect: "Let's Connect",

    // Schematic
    sch_sensor: "SENSOR",

    // Section 01: Engineering Identity
    sec1_tag: "Engineering identity",
    sec1_heading: `More than just <span class="text-primary">wires</span> and code.`,
    sec1_lead: "I work at the intersection of electrical engineering, embedded systems, automation and software — where a measurement becomes a decision, and a decision becomes a physical action.",
    sec1_p1: "My work starts at the panel: sensors, wiring, power and signal integrity. From there it moves into firmware, industrial communication, and finally into dashboards where operators actually make decisions.",
    sec1_p2: "I care about systems that stay reliable at 3 a.m. — deterministic control logic, honest telemetry, and interfaces that tell the truth about the plant.",
    stat_domains: "Domains",
    stat_protocols: "Protocols",
    stat_nodes: "Deployed nodes",
    stack_electrical: "Electrical",
    stack_embedded: "Embedded",
    stack_automation: "Automation",
    stack_software: "Software",
    badge_intelligent: "Intelligent systems",

    // Section 02: Capabilities
    sec2_tag: "Capabilities",
    sec2_heading: "What I build",
    sec2_lead: "Eight domains I work across — usually two or three at once inside the same cabinet.",
    cap_1_title: "Embedded Systems",
    cap_1_desc: "ESP32 and microcontroller firmware, sensors, actuators, GPIO and low-level communication interfaces.",
    cap_2_title: "Industrial IoT",
    cap_2_desc: "Telemetry pipelines, MQTT, edge computing, device connectivity and real-time monitoring.",
    cap_3_title: "BACS / BMS",
    cap_3_desc: "Building automation, HVAC monitoring, energy management and centralized environmental control.",
    cap_4_title: "Industrial Automation",
    cap_4_desc: "Automation workflows, control system integration and industrial monitoring architectures.",
    cap_5_title: "PLC & Control",
    cap_5_desc: "PLC logic, sequencing, industrial controllers, interlocks and HMI integration.",
    cap_6_title: "Energy & Electrical Monitoring",
    cap_6_desc: "Power metering, consumption analysis, electrical measurement and smart energy systems.",
    cap_7_title: "Industrial Communication",
    cap_7_desc: "MQTT, Modbus RTU/TCP, RS-485, TCP/IP and gateway-level protocol translation.",
    cap_8_title: "Software Integration",
    cap_8_desc: "Backend services, dashboards, APIs, time-series storage and edge/cloud visualization.",

    // Section 03: Architecture
    sec3_tag: "System architecture",
    sec3_heading: "Signal path, end to end",
    sec3_lead: "Every project I take on lives somewhere on this chain — most of them span all of it.",
    arch_1_title: "Physical world",
    arch_1_desc: "Temperature · Power · Flow",
    arch_2_title: "Sensors",
    arch_2_desc: "PZEM · DHT · CT clamp",
    arch_3_title: "MCU / PLC",
    arch_3_desc: "ESP32 · Ladder logic",
    arch_4_title: "Edge / IIoT",
    arch_4_desc: "MQTT broker · Node-RED",
    arch_5_title: "BMS / Cloud",
    arch_5_desc: "PostgreSQL · Time series",
    arch_6_title: "Dashboard",
    arch_6_desc: "Operators · Decisions",

    // Section 04: Projects
    sec4_tag: "Selected projects",
    sec4_heading: "Things I've built",
    sec4_lead: "Mini case studies — the engineering problem, the hardware, and where it runs today.",
    status_active: "ACTIVE",
    status_prototype: "PROTOTYPE",
    status_dev: "DEVELOPMENT",
    link_case_study: "Case study",
    lbl_domain: "Domain",
    lbl_stack: "Stack",
    lbl_telemetry: "Telemetry",
    proj_1_title: "Smart Energy Monitoring System",
    proj_1_desc: "Real-time electrical energy monitoring that collects power telemetry from equipment feeders and streams measurements to an edge/cloud platform for consumption analysis and anomaly alerts.",
    proj_1_domain: "Energy Management",
    proj_2_title: "Smart Building Automation",
    proj_2_desc: "Building automation prototype monitoring environmental conditions and controlling connected equipment through a centralized control architecture with scheduled and setpoint-driven logic.",
    proj_2_domain: "BACS / BMS",
    proj_3_title: "Industrial IoT Gateway",
    proj_3_desc: "Protocol-translating gateway that polls Modbus RTU field devices over RS-485, buffers readings locally, and publishes normalized telemetry upstream over MQTT with store-and-forward on link loss.",
    proj_3_domain: "IIoT",

    // Section 05: Toolbox
    sec5_tag: "Toolbox",
    sec5_heading: "Technology I work with",
    cat_hardware: "Hardware",
    cat_automation: "Automation",
    cat_communication: "Communication",
    cat_software: "Software",
    item_sensors: "Sensors",
    item_actuators: "Actuators",
    item_control_sys: "Control Systems",

    // Section 06: Philosophy
    sec6_tag: "Philosophy",
    sec6_heading: "From signal to system.",
    sec6_lead: "I enjoy building systems where hardware, software, networks and physical processes work together as one system.",
    phil_1_title: "Measure",
    phil_1_desc: "Understand the physical system through reliable, well-calibrated data.",
    phil_2_title: "Connect",
    phil_2_desc: "Link devices, controllers and platforms through robust communication.",
    phil_3_title: "Automate",
    phil_3_desc: "Turn data and control logic into useful, safe physical action.",

    // Section 07: Contact
    sec7_tag: "Contact",
    sec7_heading: `Have a system worth <span class="text-primary">building</span>?`,
    sec7_lead: "I'm interested in embedded systems, industrial automation, smart buildings, IIoT, and engineering projects that connect hardware with software.",
    btn_github: "View GitHub",
    btn_linkedin: "LinkedIn",
    btn_email: "Email Me",

    // Footer
    footer_copy: "Electrical & automation engineering portfolio",
    footer_status: "All systems nominal"
  },

  id: {
    meta_title: "Insinyur Kelistrikan & Otomasi — Embedded, IIoT, BMS",

    // Navbar
    nav_work: "Proyek",
    nav_expertise: "Keahlian",
    nav_about: "Tentang",
    nav_contact: "Kontak",
    nav_connect: "Hubungi Saya",
    lang_label: "Bahasa:",

    // Hero Section
    status_online: "Sistem online",
    status_mode: "Mode rekayasa: aktif",
    hero_title: `Merekayasa koneksi antara dunia <span class="text-primary text-glow">fisik</span> dan <span class="text-signal">digital</span>.`,
    hero_desc: "Insinyur otomasi industri & kelistrikan yang membangun sistem terhubung dan berinstrumen — dari sinyal sensor ke logika kontrol hingga dashboard.",
    tag_embedded: "Sistem Tertanam",
    tag_iiot: "Industrial IoT",
    tag_automation: "Otomasi",
    tag_bacs: "BACS / BMS",
    tag_plc: "PLC",
    tag_control: "Sistem Kontrol",
    btn_view_projects: "Lihat Proyek",
    btn_connect: "Hubungi Saya",

    // Schematic
    sch_sensor: "SENSOR",

    // Section 01: Engineering Identity
    sec1_tag: "Identitas Rekayasa",
    sec1_heading: `Lebih dari sekadar <span class="text-primary">kabel</span> dan kode.`,
    sec1_lead: "Saya bekerja di persimpangan teknik elektro, embedded systems, otomasi, dan perangkat lunak — di mana pengukuran menjadi keputusan, dan keputusan menjadi aksi fisik nyata.",
    sec1_p1: "Pekerjaan saya dimulai dari panel: sensor, pengkabelan, daya, dan integritas sinyal. Dari sana berlanjut ke firmware, komunikasi industri, hingga dashboard tempat operator mengambil keputusan penting.",
    sec1_p2: "Saya berfokus pada sistem yang tetap andal di jam 3 pagi — logika kontrol deterministik, telemetri yang akurat, dan antarmuka yang mencerminkan kondisi pabrik sebenarnya.",
    stat_domains: "Domain",
    stat_protocols: "Protokol",
    stat_nodes: "Node Terpasang",
    stack_electrical: "Elektrikal",
    stack_embedded: "Embedded",
    stack_automation: "Otomasi",
    stack_software: "Perangkat Lunak",
    badge_intelligent: "Sistem Cerdas",

    // Section 02: Capabilities
    sec2_tag: "Kemampuan",
    sec2_heading: "Apa yang Saya Bangun",
    sec2_lead: "Delapan domain bidang kerja saya — biasanya dua atau tiga sekaligus bekerja dalam satu panel kabinet.",
    cap_1_title: "Embedded Systems",
    cap_1_desc: "ESP32 dan firmware mikrokontroler, sensor, aktuator, GPIO, dan antarmuka komunikasi tingkat rendah.",
    cap_2_title: "Industrial IoT",
    cap_2_desc: "Pipeline telemetri, MQTT, edge computing, konektivitas perangkat, dan pemantauan real-time.",
    cap_3_title: "BACS / BMS",
    cap_3_desc: "Otomasi gedung, pemantauan HVAC, manajemen energi, dan kontrol lingkungan terpusat.",
    cap_4_title: "Otomasi Industri",
    cap_4_desc: "Alur kerja otomasi, integrasi sistem kontrol, dan arsitektur pemantauan fasilitas industri.",
    cap_5_title: "PLC & Kontrol",
    cap_5_desc: "Logika PLC, sekuensial, pengontrol industri, sistem interlock, dan integrasi HMI.",
    cap_6_title: "Pemantauan Energi & Listrik",
    cap_6_desc: "Pengukuran daya, analisis konsumsi, instrumentasi listrik, dan sistem energi cerdas.",
    cap_7_title: "Komunikasi Industri",
    cap_7_desc: "MQTT, Modbus RTU/TCP, RS-485, TCP/IP, dan penerjemahan protokol tingkat gateway.",
    cap_8_title: "Integrasi Perangkat Lunak",
    cap_8_desc: "Layanan backend, dashboard web, API, penyimpanan data time-series, dan visualisasi cloud/edge.",

    // Section 03: Architecture
    sec3_tag: "Arsitektur Sistem",
    sec3_heading: "Jalur sinyal, ujung ke ujung",
    sec3_lead: "Setiap proyek yang saya rancang berada di rantai ini — sebagian besar mencakup seluruh alurnya.",
    arch_1_title: "Dunia Fisik",
    arch_1_desc: "Suhu · Daya · Aliran",
    arch_2_title: "Sensor",
    arch_2_desc: "PZEM · DHT · CT clamp",
    arch_3_title: "MCU / PLC",
    arch_3_desc: "ESP32 · Ladder logic",
    arch_4_title: "Edge / IIoT",
    arch_4_desc: "MQTT broker · Node-RED",
    arch_5_title: "BMS / Cloud",
    arch_5_desc: "PostgreSQL · Time series",
    arch_6_title: "Dashboard",
    arch_6_desc: "Operator · Keputusan",

    // Section 04: Projects
    sec4_tag: "Proyek Pilihan",
    sec4_heading: "Karya yang Telah Dibangun",
    sec4_lead: "Studi kasus singkat — tantangan rekayasa, perangkat keras, dan tempat sistem beroperasi saat ini.",
    status_active: "AKTIF",
    status_prototype: "PROTOTIPE",
    status_dev: "PENGEMBANGAN",
    link_case_study: "Studi kasus",
    lbl_domain: "Domain",
    lbl_stack: "Stack",
    lbl_telemetry: "Telemetri",
    proj_1_title: "Sistem Pemantauan Energi Pintar",
    proj_1_desc: "Pemantauan energi listrik real-time yang mengumpulkan telemetri daya dari panel peralatan dan mengalirkan data ke platform edge/cloud untuk analisis konsumsi dan peringatan anomali.",
    proj_1_domain: "Manajemen Energi",
    proj_2_title: "Otomasi Gedung Pintar",
    proj_2_desc: "Prototipe otomasi gedung yang memantau kondisi lingkungan dan mengendalikan peralatan terhubung melalui arsitektur kontrol terpusat berbasis jadwal dan nilai setpoint.",
    proj_2_domain: "BACS / BMS",
    proj_3_title: "Gateway IoT Industri",
    proj_3_desc: "Gateway penerjemah protokol yang melakukan polling perangkat lapangan Modbus RTU via RS-485, menyimpan data secara lokal, dan mempublikasikan telemetri ke MQTT dengan store-and-forward.",
    proj_3_domain: "IIoT",

    // Section 05: Toolbox
    sec5_tag: "Peralatan",
    sec5_heading: "Teknologi yang Saya Gunakan",
    cat_hardware: "Perangkat Keras",
    cat_automation: "Otomasi",
    cat_communication: "Komunikasi",
    cat_software: "Perangkat Lunak",
    item_sensors: "Sensor",
    item_actuators: "Aktuator",
    item_control_sys: "Sistem Kontrol",

    // Section 06: Philosophy
    sec6_tag: "Filosofi",
    sec6_heading: "Dari sinyal menuju sistem.",
    sec6_lead: "Saya menikmati membangun sistem di mana perangkat keras, perangkat lunak, jaringan, dan proses fisik bekerja selaras sebagai satu kesatuan.",
    phil_1_title: "Ukur",
    phil_1_desc: "Memahami sistem fisik secara mendalam melalui data yang andal dan terkalibrasi.",
    phil_2_title: "Hubungkan",
    phil_2_desc: "Menghubungkan perangkat, kontroler, dan platform melalui komunikasi yang tangguh.",
    phil_3_title: "Otomasikan",
    phil_3_desc: "Mengubah data dan logika kontrol menjadi aksi fisik yang bermanfaat dan aman.",

    // Section 07: Contact
    sec7_tag: "Kontak",
    sec7_heading: `Punya sistem yang ingin <span class="text-primary">dibangun</span>?`,
    sec7_lead: "Saya tertarik pada embedded systems, otomasi industri, smart buildings, IIoT, dan proyek rekayasa yang menghubungkan perangkat keras dengan perangkat lunak.",
    btn_github: "Lihat GitHub",
    btn_linkedin: "LinkedIn",
    btn_email: "Kirim Email",

    // Footer
    footer_copy: "Portofolio rekayasa kelistrikan & otomasi",
    footer_status: "Semua sistem normal"
  }
};

document.addEventListener('DOMContentLoaded', () => {
  const navbar = document.getElementById('navbar');
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const mobileNav = document.getElementById('mobileNav');
  const mobileLinks = document.querySelectorAll('.mobile-nav-link, .mobile-btn-connect');
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('section[id]');
  const langButtons = document.querySelectorAll('.lang-btn');

  // --------------------------------------------------
  // 1. Language Switcher Logic
  // --------------------------------------------------
  let currentLang = localStorage.getItem('site_lang') || 'en';

  function setLanguage(lang) {
    if (!translations[lang]) return;
    currentLang = lang;
    localStorage.setItem('site_lang', lang);
    document.documentElement.lang = lang;

    // Update Text Elements
    document.querySelectorAll('[data-i18n]').forEach((el) => {
      const key = el.getAttribute('data-i18n');
      if (translations[lang][key]) {
        el.textContent = translations[lang][key];
      }
    });

    // Update HTML Elements (for markup with spans)
    document.querySelectorAll('[data-i18n-html]').forEach((el) => {
      const key = el.getAttribute('data-i18n-html');
      if (translations[lang][key]) {
        el.innerHTML = translations[lang][key];
      }
    });

    // Update Active State on Buttons
    langButtons.forEach((btn) => {
      if (btn.getAttribute('data-lang') === lang) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });
  }

  langButtons.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const selectedLang = btn.getAttribute('data-lang');
      if (selectedLang) {
        setLanguage(selectedLang);
      }
    });
  });

  // Apply initial language preference
  setLanguage(currentLang);

  // --------------------------------------------------
  // 2. Mobile Menu Toggle
  // --------------------------------------------------
  if (mobileMenuBtn && mobileNav) {
    mobileMenuBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      const isOpen = mobileNav.classList.contains('open');
      if (isOpen) {
        closeMobileMenu();
      } else {
        openMobileMenu();
      }
    });

    // Close mobile menu when clicking a link
    mobileLinks.forEach((link) => {
      link.addEventListener('click', () => {
        closeMobileMenu();
      });
    });

    // Close mobile menu when clicking outside
    document.addEventListener('click', (e) => {
      if (!navbar.contains(e.target)) {
        closeMobileMenu();
      }
    });
  }

  function openMobileMenu() {
    mobileNav.classList.add('open');
    mobileMenuBtn.classList.add('active');
    mobileMenuBtn.setAttribute('aria-expanded', 'true');
  }

  function closeMobileMenu() {
    mobileNav.classList.remove('open');
    mobileMenuBtn.classList.remove('active');
    mobileMenuBtn.setAttribute('aria-expanded', 'false');
  }

  // --------------------------------------------------
  // 3. Header Background & Scroll Spy
  // --------------------------------------------------
  function handleScroll() {
    if (window.scrollY > 20) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }

    // Active navigation link tracking
    let currentSectionId = '';
    const scrollPosition = window.scrollY + 100;

    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;

      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
        currentSectionId = section.getAttribute('id');
      }
    });

    navLinks.forEach((link) => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${currentSectionId}`) {
        link.classList.add('active');
      }
    });
  }

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();
});
