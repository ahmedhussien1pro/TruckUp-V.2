export interface RoadmapWeek {
  range: string
  title: string
  description: string
  tasks: string[]
  free: boolean
}

export interface RoadmapData {
  slug: string
  trackName: string
  color: string
  borderColor: string
  bgColor: string
  accentColor: string
  badgeColor: string
  weeks: RoadmapWeek[]
}

export const roadmaps: RoadmapData[] = [
  {
    slug: "power",
    trackName: "Power Systems",
    color: "text-orange-400",
    borderColor: "border-orange-500/30",
    bgColor: "bg-orange-500/5",
    accentColor: "bg-orange-500",
    badgeColor: "bg-orange-500/20 text-orange-400 border-orange-500/30",
    weeks: [
      {
        range: "Day 1–7",
        title: "Understand the field",
        description: "Get a clear picture of what power systems engineers actually do. Read job descriptions, watch industry videos, and map out the field.",
        tasks: [
          "Read 5 power systems engineer job descriptions from LinkedIn",
          "Watch: \"How the electrical grid works\" (YouTube)",
          "List the tools mentioned in 3 job postings you find interesting",
          "Write one paragraph: what part of the field excites you most",
        ],
        free: true,
      },
      {
        range: "Day 8–14",
        title: "AC circuit review",
        description: "Refresh your understanding of AC analysis, phasors, impedance, and three-phase systems — the foundation of everything in power.",
        tasks: [
          "Review phasors and AC steady-state analysis",
          "Solve 10 practice problems: series/parallel RLC circuits",
          "Understand three-phase systems: delta and star configurations",
          "Calculate power factor for a given load",
        ],
        free: true,
      },
      {
        range: "Day 15–21",
        title: "Transformers and machines",
        description: "Study transformer equivalent circuits, efficiency, and an introduction to synchronous and induction machines.",
        tasks: [
          "Draw and analyze a transformer equivalent circuit",
          "Solve voltage regulation and efficiency problems",
          "Understand the basics of induction motor operation",
          "Watch a substation walkthrough video",
        ],
        free: true,
      },
      {
        range: "Day 22–30",
        title: "Power flow and grid basics",
        description: "Understand how power flows through a network, basic bus analysis, and what a single-line diagram represents.",
        tasks: [
          "Study bus bar types: slack, PV, PQ",
          "Read and interpret a simple single-line diagram",
          "Understand per-unit system basics",
          "Run a basic power flow in MATLAB (built-in or free tutorial)",
        ],
        free: true,
      },
      {
        range: "Day 31–45",
        title: "MATLAB for power systems",
        description: "Use MATLAB and Simulink to model and simulate basic power system components and run load flow studies.",
        tasks: [
          "Model a transformer in Simulink and run a load test",
          "Simulate a three-phase fault and measure current",
          "Plot voltage profiles across a radial network",
          "Export results and write a short analysis report",
        ],
        free: false,
      },
      {
        range: "Day 46–60",
        title: "ETAP basics",
        description: "Get hands-on with ETAP — the industry standard tool for power system analysis. Learn to build networks and run studies.",
        tasks: [
          "Install ETAP student edition and complete the guided tutorial",
          "Build a 3-bus network with generator, transformer, and load",
          "Run a load flow study and interpret results",
          "Run a short-circuit study and check fault levels",
        ],
        free: false,
      },
      {
        range: "Day 61–90",
        title: "Protection systems intro",
        description: "Learn the fundamentals of power system protection: relay types, coordination, and protection design logic.",
        tasks: [
          "Study overcurrent relay coordination principles",
          "Understand differential protection for transformers",
          "Analyze a protection coordination study in ETAP",
          "Complete a capstone: protect a simple 2-bus network",
        ],
        free: false,
      },
    ],
  },
  {
    slug: "embedded",
    trackName: "Embedded Systems",
    color: "text-blue-400",
    borderColor: "border-blue-500/30",
    bgColor: "bg-blue-500/5",
    accentColor: "bg-blue-500",
    badgeColor: "bg-blue-500/20 text-blue-400 border-blue-500/30",
    weeks: [
      {
        range: "Day 1–7",
        title: "Understand the field",
        description: "Learn what embedded engineers actually build and where they work. Explore real products, job postings, and the scope of the discipline.",
        tasks: [
          "Read 5 embedded firmware engineer job descriptions",
          "List 10 products that have embedded systems inside them",
          "Watch: \"What is embedded systems engineering?\" (YouTube)",
          "Write one paragraph: what type of embedded project excites you",
        ],
        free: true,
      },
      {
        range: "Day 8–14",
        title: "C programming refresher",
        description: "Strengthen your C fundamentals — especially the parts embedded engineers use daily: pointers, structs, bitwise ops, and memory.",
        tasks: [
          "Review pointers, pointer arithmetic, and function pointers",
          "Practice bitwise operations: masking, shifting, toggling bits",
          "Write a struct-based state machine in plain C",
          "Understand volatile keyword and when to use it",
        ],
        free: true,
      },
      {
        range: "Day 15–21",
        title: "Arduino: GPIO and peripherals",
        description: "Use Arduino to control hardware: GPIO, PWM, ADC, UART. Build small circuits and see code control the physical world.",
        tasks: [
          "Blink LED using GPIO output and timer-based delay",
          "Read a button with debounce logic in software",
          "Send data to a PC over UART serial and parse it",
          "Read an analog sensor and map values to a range",
        ],
        free: true,
      },
      {
        range: "Day 22–30",
        title: "First real project",
        description: "Build a complete mini-project that integrates a sensor, display, and communication. Tie together everything from week 1–3.",
        tasks: [
          "Connect a DHT22 temperature/humidity sensor",
          "Display readings on an I2C LCD screen",
          "Log data over UART every 5 seconds",
          "Add an alert LED if temperature exceeds a threshold",
        ],
        free: true,
      },
      {
        range: "Day 31–45",
        title: "STM32 and HAL library",
        description: "Move from Arduino to professional microcontrollers. Use STM32CubeIDE and HAL to configure peripherals at a professional level.",
        tasks: [
          "Set up STM32CubeIDE and flash a Nucleo board",
          "Configure GPIO, UART, and TIM using CubeMX",
          "Reproduce the sensor project using STM32 HAL",
          "Debug using SWD and STM32 integrated debugger",
        ],
        free: false,
      },
      {
        range: "Day 46–60",
        title: "FreeRTOS basics",
        description: "Understand real-time operating systems and apply them. Learn tasks, queues, semaphores, and how to structure firmware properly.",
        tasks: [
          "Create two FreeRTOS tasks with different priorities",
          "Use a queue to pass sensor data between tasks",
          "Use a binary semaphore for interrupt synchronization",
          "Measure task execution time and analyze scheduling",
        ],
        free: false,
      },
      {
        range: "Day 61–90",
        title: "Communication protocols",
        description: "Master SPI, I2C, and UART at the register level. Understand CAN bus basics and how embedded devices communicate in real systems.",
        tasks: [
          "Implement SPI communication with an external flash chip",
          "Use I2C to communicate with a sensor using raw register reads",
          "Set up CAN loopback mode and transmit a frame on STM32",
          "Capstone: multi-sensor system with RTOS + protocol logging",
        ],
        free: false,
      },
    ],
  },
  {
    slug: "communications",
    trackName: "Communications Systems",
    color: "text-purple-400",
    borderColor: "border-purple-500/30",
    bgColor: "bg-purple-500/5",
    accentColor: "bg-purple-500",
    badgeColor: "bg-purple-500/20 text-purple-400 border-purple-500/30",
    weeks: [
      {
        range: "Day 1–7",
        title: "Understand the field",
        description: "Learn what communications engineers work on, which industries hire them, and what problems they solve.",
        tasks: [
          "Read 5 RF or DSP engineer job descriptions",
          "Watch: \"How 5G actually works\" and \"What is signal processing?\" (YouTube)",
          "Map out the telecom industry: devices → baseband → RF → network",
          "Write one paragraph: which area interests you most",
        ],
        free: true,
      },
      {
        range: "Day 8–14",
        title: "Signals and systems review",
        description: "Refresh your understanding of continuous and discrete signals, LTI systems, convolution, and the frequency domain.",
        tasks: [
          "Review LTI system properties and convolution",
          "Practice CTFT and DTFT for standard signals",
          "Sketch magnitude spectra for basic signals",
          "Solve 10 signals and systems practice problems",
        ],
        free: true,
      },
      {
        range: "Day 15–21",
        title: "Fourier transforms in MATLAB",
        description: "Apply the theory in MATLAB. Build intuition for how signals look in frequency domain and how filtering works.",
        tasks: [
          "Compute and plot FFT of various test signals in MATLAB",
          "Apply a low-pass FIR filter and visualize the result",
          "Add white Gaussian noise and observe SNR effects",
          "Compare time-domain and frequency-domain views of a signal",
        ],
        free: true,
      },
      {
        range: "Day 22–30",
        title: "Analog modulation basics",
        description: "Understand AM and FM modulation and demodulation. Simulate complete communication links in MATLAB.",
        tasks: [
          "Implement AM modulation and demodulation in MATLAB",
          "Implement FM modulation and compute bandwidth",
          "Add AWGN channel noise and plot BER vs SNR",
          "Compare AM vs FM performance under noise",
        ],
        free: true,
      },
      {
        range: "Day 31–45",
        title: "Digital modulation: BPSK, QPSK, QAM",
        description: "Move into digital communications. Understand constellation diagrams, bit error rates, and digital modulation schemes used in real systems.",
        tasks: [
          "Implement BPSK modulator and demodulator in MATLAB",
          "Plot constellation diagrams for BPSK, QPSK, 16-QAM",
          "Compute theoretical vs simulated BER curves",
          "Analyze how higher-order modulation affects spectral efficiency",
        ],
        free: false,
      },
      {
        range: "Day 46–60",
        title: "OFDM and 5G concepts",
        description: "Learn OFDM — the modulation at the core of LTE, 5G, and WiFi. Understand cyclic prefix, subcarrier mapping, and basic 5G NR concepts.",
        tasks: [
          "Implement a basic OFDM system in MATLAB end to end",
          "Add cyclic prefix and simulate multipath channel",
          "Study 5G NR numerologies and subcarrier spacing",
          "Compare OFDM performance with and without CP",
        ],
        free: false,
      },
      {
        range: "Day 61–90",
        title: "GNU Radio project",
        description: "Move from simulation to software-defined radio. Build a real transmission and reception chain using GNU Radio and an SDR dongle.",
        tasks: [
          "Install GNU Radio and connect an RTL-SDR dongle",
          "Receive and demodulate an FM radio broadcast",
          "Build a BPSK transmitter and receiver flowgraph",
          "Capstone: transmit and receive a text message over SDR",
        ],
        free: false,
      },
    ],
  },
]

export function getRoadmap(slug: string): RoadmapData | undefined {
  return roadmaps.find((r) => r.slug === slug)
}
