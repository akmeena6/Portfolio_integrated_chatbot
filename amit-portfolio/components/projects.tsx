"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"

const projects = [
  {
    title: "TradeThrill",
    description: "An e-commerce website similar to OLX, built as a course project at IIT Kanpur.",
    details: [
      "Collaboratively implemented with a team of 10 members using web development principles",
      "Utilized React JS to implement web pages such as Sign Up, Login, and Forget Password",
      "Gained exposure to MongoDB, PostgreSQL, HTML, CSS, and JavaScript",
      "Contributed to formal documentation of the project",
    ],
    tags: ["React", "MongoDB", "PostgreSQL", "HTML", "CSS", "JavaScript"],
    links: {
      github: "#",
      demo: "#",
    },
  },
  {
    title: "House Price Prediction",
    description: "A machine learning model to predict house prices using regression techniques.",
    details: [
      "Implemented Linear Regression Model for prediction using 404 training and 102 test data sets",
      "Used Root mean squared error (RMSE) for finding the accuracy of the model (4.83)",
      "Implemented SimpleImputer and Pipeline Concept for efficient data handling",
      "Used Stratified Shuffled Split along with Pipeline for balanced training data",
      "Implemented Random Forest Regressor with 4x better RMSE compared to Linear Regression",
    ],
    tags: ["Python", "Machine Learning", "Linear Regression", "Random Forest", "Data Analysis"],
    links: {
      github: "#",
      demo: "#",
    },
  },
  {
    title: "SMS Spam Classifier",
    description: "A classifier to identify spam SMS/emails using natural language processing techniques.",
    details: [
      "Created using libraries like numpy, scikit-learn, matplotlib, and nltk",
      "Applied data preprocessing using nltk and used Tfidf vectorization technique",
      "Developed different model classifiers with 100% precision and 95% accuracy in Multinomial naive-bayes",
      "Used Streamlit to design a website that classifies typed SMS as spam/not-spam",
    ],
    tags: ["Python", "NLP", "Machine Learning", "Streamlit", "Scikit-learn"],
    links: {
      github: "#",
      demo: "#",
    },
  },
]

export default function Projects() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="projects" className="py-16">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl font-bold text-center mb-12">
          My <span className="text-primary">Projects</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full flex flex-col hover:shadow-md transition-shadow">
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <ul className="space-y-2 text-sm text-muted-foreground mb-4">
                    {project.details.map((detail, i) => (
                      <li key={i} className="flex items-start">
                        <span className="text-primary mr-2">•</span>
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {project.tags.map((tag, tagIndex) => (
                      <Badge key={tagIndex} variant="secondary">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="outline" size="sm" asChild>
                    <a href={project.links.github} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" />
                      Code
                    </a>
                  </Button>
                  <Button variant="default" size="sm" asChild>
                    <a href={project.links.demo} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Demo
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

