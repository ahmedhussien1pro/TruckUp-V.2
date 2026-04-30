export interface TrackData {
  slug: "power" | "embedded" | "communications"
  name: string
  shortDescription: string
  fullDescription: string
  color: string
  accentColor: string
  borderColor: string
  bgColor: string
  badgeColor: string
  icon: string
  dailyWork: string[]
  tools: { name: string; purpose: string }[]
  fitsYouIf: string[]
  thinkTwiceIf: string[]
  misconceptions: { myth: string; reality: string }[]
  entryPath: string[]
}

export const tracks: TrackData[] = [
  {
    slug: "power",
    name: "Power Systems",
    shortDescription: "Energy generation, transmission, and distribution at scale.",
    fullDescription:
      "Power Systems engineering covers the design, analysis, and operation of electrical energy infrastructure. You work with generators, transformers, transmission lines, substations, motors, and power electronics. The field sits at the intersection of classical electrical engineering and modern energy transition — from traditional grids to renewable integration and smart grid systems.",
    color: "text-orange-400",
    accentColor: "bg-orange-500",
    borderColor: "border-orange-500/30",
    bgColor: "bg-orange-500/5",
    badgeColor: "bg-orange-500/20 text-orange-400 border-orange-500/30",
    icon: "Zap",
    dailyWork: [
      "Running power flow and short-circuit studies to analyze grid behavior",
      "Designing protection relay settings and fault analysis",
      "Reviewing and approving substation single-line diagrams",
      "Conducting energy audits and efficiency analysis",
      "Coordinating with contractors during on-site installation and commissioning",
      "Analyzing renewable energy integration into existing grids",
    ],
    tools: [
      { name: "ETAP", purpose: "Power system analysis and simulation" },
      { name: "MATLAB / Simulink", purpose: "Modeling and control design" },
      { name: "AutoCAD Electrical", purpose: "Electrical drawing and schematics" },
      { name: "PSCAD", purpose: "Transient simulation" },
      { name: "PLC (Siemens / ABB)", purpose: "Industrial automation and control" },
      { name: "PSSE / DigSilent", purpose: "Grid-level power flow studies" },
    ],
    fitsYouIf: [
      "You want your work to have large-scale, visible infrastructure impact",
      "You are comfortable with advanced math including differential equations and AC analysis",
      "You enjoy field work, site visits, and working with large physical equipment",
      "You are interested in the energy transition, renewables, or smart grids",
      "You prefer systematic, standards-driven engineering over creative software development",
    ],
    thinkTwiceIf: [
      "You strongly dislike field conditions, outdoor work, or large industrial environments",
      "You prefer software-only or research-focused work",
      "You have no interest in large-scale energy systems or infrastructure",
      "You find circuit analysis and electromagnetic theory particularly frustrating",
    ],
    misconceptions: [
      {
        myth: "It is just about wires and basic circuits",
        reality: "Modern power engineering involves complex control systems, power electronics, digital protection, and grid-scale optimization.",
      },
      {
        myth: "The field is declining because of renewables",
        reality: "The energy transition is creating massive demand for power engineers who understand both legacy grid systems and new renewable integration.",
      },
      {
        myth: "You need to be on-site in dangerous conditions constantly",
        reality: "Most roles split time between office analysis and occasional site work. Safety protocols are strict and well-defined.",
      },
    ],
    entryPath: [
      "Build a strong foundation in AC circuit analysis and electrical machines",
      "Learn MATLAB for simulation and ETAP for power system studies",
      "Get familiar with single-line diagrams and protection relay concepts",
      "Look for internships at utilities, EPC firms, or renewable energy companies",
      "Consider IEEE membership and relevant certifications (PE exam path in the long term)",
    ],
  },
  {
    slug: "embedded",
    name: "Embedded Systems",
    shortDescription: "Programming microcontrollers and building hardware-software interfaces.",
    fullDescription:
      "Embedded Systems engineering sits at the intersection of hardware and software. You write firmware that runs directly on microcontrollers, design circuits, and build systems that interact with the physical world. From automotive ECUs to medical devices, consumer electronics, and industrial controllers — if a product has a chip running real-time software, an embedded engineer built it.",
    color: "text-blue-400",
    accentColor: "bg-blue-500",
    borderColor: "border-blue-500/30",
    bgColor: "bg-blue-500/5",
    badgeColor: "bg-blue-500/20 text-blue-400 border-blue-500/30",
    icon: "Cpu",
    dailyWork: [
      "Writing and debugging firmware in C or C++ for microcontrollers",
      "Integrating peripheral drivers: UART, SPI, I2C, CAN",
      "Reading hardware datasheets and implementing register-level configurations",
      "Using oscilloscopes and logic analyzers to diagnose hardware issues",
      "Reviewing PCB schematics and collaborating with hardware designers",
      "Writing unit tests and validation suites for firmware modules",
    ],
    tools: [
      { name: "STM32 / ESP32", purpose: "Professional microcontroller platforms" },
      { name: "Keil / PlatformIO", purpose: "IDE and build toolchains" },
      { name: "FreeRTOS", purpose: "Real-time operating system for embedded" },
      { name: "GDB / OpenOCD", purpose: "Debugging and flashing" },
      { name: "Oscilloscope / Logic Analyzer", purpose: "Hardware signal debugging" },
      { name: "Git + CMake", purpose: "Version control and build systems" },
    ],
    fitsYouIf: [
      "You enjoy the satisfaction of seeing code control a physical device",
      "You are comfortable or excited to learn C and low-level programming",
      "You like systematic debugging and do not give up when something does not work",
      "You are curious about how hardware and software interact at a fundamental level",
      "You enjoy working with circuits, sensors, and real hardware in addition to code",
    ],
    thinkTwiceIf: [
      "You are only interested in high-level programming (Python, web apps)",
      "You have no patience for long debugging cycles with unclear root causes",
      "You dislike reading technical documentation, datasheets, or hardware specs",
      "You are not interested in any hardware interaction or circuit-level work",
    ],
    misconceptions: [
      {
        myth: "Embedded is just Arduino for beginners",
        reality: "Professional embedded work involves STM32, RTOS, communication protocols, safety-critical systems, and strict coding standards like MISRA C.",
      },
      {
        myth: "You need a software engineering background",
        reality: "Embedded is a distinct discipline. EE students with strong C skills and hardware understanding are highly valued, often more than software-only developers.",
      },
      {
        myth: "The job is mostly soldering and hardware assembly",
        reality: "Most embedded roles are primarily firmware development, debugging, and integration. Hardware design is a separate (though related) specialization.",
      },
    ],
    entryPath: [
      "Get solid in C programming — pointers, memory management, and bitwise operations",
      "Start with Arduino to understand GPIO, timers, and communication basics",
      "Move to STM32 using HAL or bare-metal register programming",
      "Build a project: sensor + display + UART communication or a small RTOS application",
      "Learn to use an oscilloscope and logic analyzer for real debugging",
    ],
  },
  {
    slug: "communications",
    name: "Communications Systems",
    shortDescription: "Signal processing, wireless transmission, and data communication design.",
    fullDescription:
      "Communications Systems engineering covers the science and design of systems that transmit information — wirelessly or over wire. You work with modulation schemes, signal processing algorithms, antenna systems, channel modeling, and communication protocols. The field drives everything from smartphones and satellite links to 5G networks and deep-space communication.",
    color: "text-purple-400",
    accentColor: "bg-purple-500",
    borderColor: "border-purple-500/30",
    bgColor: "bg-purple-500/5",
    badgeColor: "bg-purple-500/20 text-purple-400 border-purple-500/30",
    icon: "Radio",
    dailyWork: [
      "Designing and simulating modulation and demodulation schemes",
      "Performing link budget calculations for wireless system design",
      "Analyzing channel models and noise behavior in communication systems",
      "Building and testing signal processing algorithms in MATLAB or Python",
      "Working with RF measurement equipment and spectrum analyzers",
      "Reviewing and contributing to communication protocol specifications",
    ],
    tools: [
      { name: "MATLAB / Simulink", purpose: "Signal processing and system simulation" },
      { name: "GNU Radio", purpose: "Software-defined radio and SDR experiments" },
      { name: "Python (NumPy/SciPy)", purpose: "DSP scripting and data analysis" },
      { name: "Wireshark", purpose: "Protocol analysis and packet inspection" },
      { name: "Spectrum Analyzer / VNA", purpose: "RF measurements" },
      { name: "OFDM / 5G NR toolboxes", purpose: "Modern wireless systems simulation" },
    ],
    fitsYouIf: [
      "You are genuinely fascinated by how data moves wirelessly over long distances",
      "You enjoy mathematical analysis and are comfortable with Fourier transforms and probability",
      "You prefer simulation, modeling, and analytical work over hands-on hardware",
      "You are interested in 5G, satellite systems, or wireless research",
      "You find signal theory and spectral analysis intellectually engaging",
    ],
    thinkTwiceIf: [
      "You strongly dislike abstract mathematics or find signal analysis very frustrating",
      "You want primarily hands-on, physical hardware work",
      "You have no interest in wireless technology, networking, or signal behavior",
      "You find frequency-domain thinking particularly unintuitive",
    ],
    misconceptions: [
      {
        myth: "It is just about setting up routers and networking",
        reality: "Communications engineering is a deep technical field involving signal theory, antenna design, modulation, channel coding, and RF systems — far beyond IT networking.",
      },
      {
        myth: "You need to be a math genius",
        reality: "Strong math helps, but practical communications work involves simulation tools, standards documents, and systematic design — not solving equations from scratch daily.",
      },
      {
        myth: "The field is saturated because of software-defined everything",
        reality: "SDR and 5G/6G development have increased demand for engineers who understand the physical layer — a skill that pure software developers lack.",
      },
    ],
    entryPath: [
      "Review and strengthen your understanding of signals and systems and Fourier analysis",
      "Learn MATLAB for DSP — filtering, FFT, modulation simulation",
      "Work through a basic communications textbook (Haykin or Proakis)",
      "Build a simple GNU Radio project to see SDR in action",
      "Look for internships at telecom companies, research labs, or defense firms",
    ],
  },
]

export function getTrack(slug: string): TrackData | undefined {
  return tracks.find((t) => t.slug === slug)
}
