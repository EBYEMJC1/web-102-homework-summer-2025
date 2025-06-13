import logo from './logo.svg';
import './App.css';

const topics = [
  {
    title: "R Registers, Logic, Arithmetic, and Bit Instructions",
    description: "Overview of how to use x86-64 general-purpose registers (like rax, rbx, rcx, etc.) for logic (AND, OR, XOR), arithmetic (ADD, SUB, MUL, DIV), and bitwise instructions (shifts, rotates). Learn where and why you’d use each type, and see examples of how register values change during operations."
  },
  {
    title: "SSE Register Instructions",
    description: "Introduction to SIMD (Single Instruction, Multiple Data) using SSE registers (xmm0, xmm1, etc.) for parallel processing. Explore why SSE is useful for speed, what instructions you’ll actually use in class, and where it fits into assembly assignments compared to R registers."
  },
  {
    title: "Parameter Passing for Hybrid Assembly (C/ASM)",
    description: "Practice parameter passing between C/C++ and assembly. Learn what to pass into printf, scanf, and other functions based on their prototypes, and how to handle extra parameters (more than 6) when the calling convention puts some on the stack. Includes real hybrid function call examples."
  },
  {
    title: "Stack and Heap",
    description: "Learn about dynamic memory (malloc), stack frame structure, heap structure, and the roles of rbp, rsp, and rip during function calls and returns. See how the stack and heap interact, how local vs dynamic variables are stored, and why 'stack overflow' is more than just a meme."
  },
  {
    title: "Memory Management for Functions & 16-Byte Boundary Alignment",
    description: "Find out why stack frames need to be aligned to a 16-byte boundary, and what can go wrong if you ignore this rule. Learn how rsp, rbp, and other registers manage function scope, how return values get from rax or xmm0, and why push/pop (or save/restore) operations matter for correct program behavior."
  },
  {
    title: "Setting Up Your ASM and C/C++ Files",
    description: "Learn when and why to use extern 'C' vs extern, and how to organize an assembly file with declarations, .data for variables, .bss for uninitialized storage, and .text for your instructions. See how sections work together so your code links and runs."
  },
  {
    title: "Bash Script Commands for Compilation and Linking (Toolchain)",
    description: "Learn about the toolchain: what the assembler, linker, and compiler each do, and the meaning of command flags like -o, .lis, and -c. Understand the workflow from .asm and .cpp files to object files and an executable, including typical mistakes students make."
  },
  {
    title: "Binary, Decimal, and Hex Conversions",
    description: "Learn to convert back and forth between binary, hex, and decimal for both signed and unsigned integers. Practice common conversion tricks, understand where conversion comes up in assembly, and see why getting these wrong leads to mystery bugs."
  },
  {
    title: "IEEE 754 & IEEE 64-bit Floating Point Conversions",
    description: "Go beyond integer conversion: learn how decimal numbers are stored as binary in IEEE 754 format (double precision, 64-bit), how to convert between them, and how to find the gap between two floating-point numbers by subtracting them. Understand how large numbers lose precision, and why 'rounding errors' happen due to 64-bit limits and how ranges double (0–1, 1–2, 2–4, etc.) with fewer representable values as the numbers grow."
  },
  {
    title: "Loops in Assembly",
    description: "Learn how to build loops in assembly using jump instructions (ja, jg, jb, jl, je, etc.), understand the role of the condition flags (ZF, CF, SF) in making comparisons, and how to use CMP/UCOMISD for both integer and floating-point loops. Includes tips on common bugs, like off-by-one errors and endless loops."
  },
  {
    title: "Random Numbers in Assembly",
    description: "Learn how to generate random numbers using the rdrand instruction, and how to convert the random output to a range you want (like 1–100) using this formula: randomInRange = (randomValue % (max - min + 1)) + min. See why this matters for simple games, simulations, or unique values, and what to watch out for with bias in modulo math."
  },
  {
    title: "Macros and Their Use",
    description: "Understand how macros help you reuse code by pasting instructions wherever you call the macro name. Learn the difference between macros and functions in assembly, why macros can make your code shorter, and what common mistakes to avoid (like accidentally redefining macros or hiding errors)."
  },
  {
    title: "CPU Clock",
    description: "Learn how to measure program speed using the CPU clock, and what instructions like cpuid and rdtsc do. Find out how clock ticks are counted from when your computer boots, and how to use them to time your code’s performance or compare algorithms."
  },
  {
    title: "Pure Assembly Examples",
    description: "See how to handle input and output using only assembly (not C), with direct syscalls like sys_read and sys_write. Learn to read one character at a time from stdin, print to stdout, and protect your code from buffer overflows and other input errors."
  },
  {
    title: "Software Licenses",
    description: "Learn about major open-source licenses, including GPLv3, LGPLv3, and Creative Commons, and what rights and restrictions each one gives you. See when you should use each license for code you share, and why licensing matters even in class projects."
  }
];


function App() {

  function renderCards() {
    return topics.map(
      (topic_in_topics, index_in_topics_list) => (
      <div className="card" key={index_in_topics_list}>
        <h2>{topic_in_topics.title}</h2>
        <p>{topic_in_topics.description}</p>
      </div>
      )
    )
  }

  return (
    <div>
      <header>
        <h1> CPSC 240 Resource Guide</h1>
        <p>
          Study and refrence **Key** topics in Assembly Language at CSUF.
        </p>
      </header>

      <div className="card-container">
        {renderCards()}
      </div>
    </div>
  );
}

export default App;
