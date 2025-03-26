import { type NextRequest, NextResponse } from "next/server"
import { resumeData } from "@/lib/resume-data"

export async function POST(req: NextRequest) {
  try {
    const { message } = await req.json()

    // Simple rule-based responses
    let response = ""

    const lowerMessage = message.toLowerCase()

    if (lowerMessage.includes("hello") || lowerMessage.includes("hi") || lowerMessage.includes("hey")) {
      response = "Hello! I'm Amit's virtual assistant. How can I help you today?"
    } else if (lowerMessage.includes("skills") || lowerMessage.includes("technologies")) {
      response = `Amit is skilled in ${resumeData.technicalSkills.programmingLanguages.join(", ")}. He's also familiar with libraries like ${resumeData.technicalSkills.softwaresAndLibraries.slice(0, 4).join(", ")}.`
    } else if (lowerMessage.includes("project") || lowerMessage.includes("work")) {
      const projects = resumeData.projects.map((p) => p.title).join(", ")
      response = `Amit has worked on several projects including ${projects}. You can check out more details in the Projects section!`
    } else if (lowerMessage.includes("education") || lowerMessage.includes("study")) {
      response = `Amit is currently pursuing ${resumeData.education[0].degree} in Computer Science and Engineering at ${resumeData.education[0].institute} (expected graduation: ${resumeData.personalInfo.expectedGraduation}). He scored ${resumeData.education[1].score} in Class XII and ${resumeData.education[2].score} in Class X from Jawahar Navodaya Vidyalaya, Bundi.`
    } else if (lowerMessage.includes("contact") || lowerMessage.includes("reach") || lowerMessage.includes("email")) {
      response = `You can contact Amit via email at ${resumeData.personalInfo.email} or call at ${resumeData.personalInfo.phone}. Alternatively, you can use the contact form on this website!`
    } else if (lowerMessage.includes("achievement") || lowerMessage.includes("accomplishment")) {
      response = `Amit ${resumeData.achievements[0]} He's also a ${resumeData.competitiveProgramming[0].rank} on Codeforces (Rating ${resumeData.competitiveProgramming[0].highestRating}) and a ${resumeData.competitiveProgramming[1].rank} coder on Codechef (Rating ${resumeData.competitiveProgramming[1].highestRating}).`
    } else if (
      lowerMessage.includes("competitive") ||
      lowerMessage.includes("coding") ||
      lowerMessage.includes("programming")
    ) {
      response = `Amit is active in competitive programming. He's a ${resumeData.competitiveProgramming[0].rank} on Codeforces with a rating of ${resumeData.competitiveProgramming[0].highestRating} and a ${resumeData.competitiveProgramming[1].rank} coder on Codechef with a rating of ${resumeData.competitiveProgramming[1].highestRating}.`
    } else if (lowerMessage.includes("thank")) {
      response = "You're welcome! If you have any more questions about Amit, feel free to ask!"
    } else if (lowerMessage.includes("bye") || lowerMessage.includes("goodbye")) {
      response = "Goodbye! Feel free to reach out if you have more questions about Amit in the future!"
    } else {
      response =
        "I'm not sure I understand. Would you like to know about Amit's skills, projects, education, or contact information?"
    }

    return NextResponse.json({ response })
  } catch (error) {
    console.error("Error in chat API:", error)
    return NextResponse.json({ error: "Failed to process your request" }, { status: 500 })
  }
}

