import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Download, Github, Linkedin, Mail, Phone, MapPin } from "lucide-react"

export default function ResumePage() {
  return (
    <div className="min-h-screen bg-background py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8 flex justify-between items-center">
          <Button variant="outline" asChild>
            <Link href="/">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Portfolio
            </Link>
          </Button>
    
            
            <a href="https://drive.google.com/file/d/1QwFj-hh9gCP5m0pGOWs4DEw1JialGNjT/view?usp=sharing" className="text-red-600 text-bold">Download Resume</a>
      
        </div>

        <div className="bg-card shadow-lg rounded-lg overflow-hidden border">
          <div className="p-8 border-b">
            <h1 className="text-3xl font-bold">Amit Kumar Meena</h1>
            <p className="text-xl text-muted-foreground mt-2">Computer Science & Engineering Undergraduate</p>
            <div className="mt-4 flex flex-wrap gap-4">
              <div className="flex items-center text-muted-foreground">
                <Mail className="h-4 w-4 mr-2" />
                <span>amitkmeena22@iitk.ac.in</span>
              </div>
              <div className="flex items-center text-muted-foreground">
                <Phone className="h-4 w-4 mr-2" />
                <span>+91-8619931979</span>
              </div>
              <div className="flex items-center text-muted-foreground">
                <MapPin className="h-4 w-4 mr-2" />
                <span>IIT Kanpur, Uttar Pradesh, India</span>
              </div>
              <div className="flex items-center text-muted-foreground">
                <Github className="h-4 w-4 mr-2" />
                <span>github.com/akmeena6</span>
              </div>
              <div className="flex items-center text-muted-foreground">
                <Linkedin className="h-4 w-4 mr-2" />
                <span>https://www.linkedin.com/in/amit-kumar-meena-9b6aa125b/</span>
              </div>
            </div>
          </div>

          <div className="p-8">
            <section className="mb-8">
              <h2 className="text-xl font-bold mb-4 text-primary">Education</h2>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between">
                    <h3 className="font-semibold">Indian Institute of Technology, Kanpur</h3>
                    <span className="text-muted-foreground">2022 - Present</span>
                  </div>
                  <p>B.Tech in Computer Science and Engineering</p>
                  <p className="text-muted-foreground">CPI: 6.9/10</p>
                  <p className="text-muted-foreground">Expected Graduation: April 2026</p>
                </div>
                <div>
                  <div className="flex justify-between">
                    <h3 className="font-semibold">Jawahar Navodaya Vidyalaya, Bundi</h3>
                    <span className="text-muted-foreground">2022</span>
                  </div>
                  <p>CBSE Class XII</p>
                  <p className="text-muted-foreground">Percentage: 92.4%</p>
                </div>
                <div>
                  <div className="flex justify-between">
                    <h3 className="font-semibold">Jawahar Navodaya Vidyalaya, Bundi</h3>
                    <span className="text-muted-foreground">2020</span>
                  </div>
                  <p>CBSE Class X</p>
                  <p className="text-muted-foreground">Percentage: 91.6%</p>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-bold mb-4 text-primary">Scholastic Achievements</h2>
              <ul className="list-disc list-inside space-y-2">
                <li>
                  Secured All India Rank 6388 in Joint Entrance Examination (Advanced) 2022 among the 2.5 Lakh
                  shortlisted candidates.
                </li>
                <li>
                  Among the top 2% of the 11 Lakh candidates in Joint Entrance Examination (Mains) 2022 securing 97.31
                  Percentile.
                </li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-bold mb-4 text-primary">Key Projects</h2>
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between">
                    <h3 className="font-semibold">TradeThrill | Course Project | Prof. Indranil Saha | IIT Kanpur</h3>
                    <span className="text-muted-foreground">Jan'24-Apr'24</span>
                  </div>
                  <ul className="list-disc list-inside mt-2 text-muted-foreground">
                    <li>
                      Collaboratively implemented an e-commerce website akin to OLX using Web development principles
                      with a team of 10 members.
                    </li>
                    <li>
                      Utilize React JS to effectively implement web pages such as Sign Up, Login and Forget Password in
                      frontend development.
                    </li>
                    <li>
                      Got an exposure to the concepts of databases like MongoDB, PostgreSQL and languages like HTML, CSS
                      and Javascript.
                    </li>
                    <li>
                      Got to knowledge about the formal documentation of any project and contributed in the making the
                      formal documents for project.
                    </li>
                  </ul>
                </div>
                <div>
                  <div className="flex justify-between">
                    <h3 className="font-semibold">House Price Prediction | Self Project</h3>
                    <span className="text-muted-foreground">Jun'24-Jul'24</span>
                  </div>
                  <ul className="list-disc list-inside mt-2 text-muted-foreground">
                    <li>
                      Implemented Linear Regression Model for prediction of house prices using 404 training and 102 test
                      data sets from 506 total.
                    </li>
                    <li>
                      Used Root mean squared error (RMSE) for finding the accuracy of the LinearRegression model and
                      that evaluates to 4.83.
                    </li>
                    <li>
                      Implemented the SimpleImputer and Pipeline Concept to efficiently fit, transform, and handle
                      missing values in the dataset.
                    </li>
                    <li>
                      Used Stratified Shuffled Split along with Pipeline to avoid getting all the same type of
                      particular feature in training dataset.
                    </li>
                    <li>
                      Also implemented Random Forest Regressor by which, we got almost 4 times less RMSE compared to
                      Linear Regression.
                    </li>
                  </ul>
                </div>
                <div>
                  <div className="flex justify-between">
                    <h3 className="font-semibold">SMS Spam Classifier | Self Project</h3>
                    <span className="text-muted-foreground">Jun'24-Jul'24</span>
                  </div>
                  <ul className="list-disc list-inside mt-2 text-muted-foreground">
                    <li>
                      Created a spam sms/email classifier using the libraries like numpy, scikit-learn, matplotlib,
                      natural language toolkit (nltk).
                    </li>
                    <li>
                      Apply data preprocessing using nltk and used Tfidf vectorizarion technique to enhance the model
                      accuracy and precision.
                    </li>
                    <li>
                      Developed different model classifiers and found a maximum of 100% precision and 95% accuracy in
                      Multinomial naive-bayes.
                    </li>
                    <li>
                      Used Streamlit to design a website in which the type of typed sms will be printed as spam/not-spam
                      as predicted by the model.
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-bold mb-4 text-primary">Competitive Programming</h2>
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-border">
                  <thead>
                    <tr>
                      <th className="px-4 py-2 text-left">Platform</th>
                      <th className="px-4 py-2 text-left">Highest Rating</th>
                      <th className="px-4 py-2 text-left">Rank</th>
                      <th className="px-4 py-2 text-left">Profile Handle</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    <tr>
                      <td className="px-4 py-2">Codeforces</td>
                      <td className="px-4 py-2">1454</td>
                      <td className="px-4 py-2">Specialist</td>
                      <td className="px-4 py-2">Mightyboy</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2">Codechef</td>
                      <td className="px-4 py-2">1647</td>
                      <td className="px-4 py-2">3 Star</td>
                      <td className="px-4 py-2">mightyboy</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-bold mb-4 text-primary">Technical Skills</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <h3 className="font-semibold mb-2">Programming Languages</h3>
                  <p className="text-muted-foreground">C, C++, Python, Java, HTML, CSS, JavaScript</p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Softwares and Libraries</h3>
                  <p className="text-muted-foreground">
                    Numpy, TensorFlow, Pytorch, Pandas, Git, Scikit-learn, Matplotlib, ReactJS, Github
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Exposure</h3>
                  <p className="text-muted-foreground">
                    Object oriented programming(OOPS), Machine Learning, Deep Learning, Frontend development
                  </p>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-bold mb-4 text-primary">Relevant Courses</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                <div className="flex items-center">
                  <span className="text-primary mr-2">•</span>
                  <span>Data Structure and Algorithms</span>
                </div>
                <div className="flex items-center">
                  <span className="text-primary mr-2">•</span>
                  <span>Operating Systems</span>
                </div>
                <div className="flex items-center">
                  <span className="text-primary mr-2">•</span>
                  <span>Fundamentals of Computing</span>
                </div>
                <div className="flex items-center">
                  <span className="text-primary mr-2">•</span>
                  <span>Introduction to Electronics</span>
                </div>
                <div className="flex items-center">
                  <span className="text-primary mr-2">•</span>
                  <span>Introduction to Computer Organization</span>
                </div>
                <div className="flex items-center">
                  <span className="text-primary mr-2">•</span>
                  <span>Software Development and Operations</span>
                </div>
                <div className="flex items-center">
                  <span className="text-primary mr-2">•</span>
                  <span>Computer Networks*</span>
                </div>
                <div className="flex items-center">
                  <span className="text-primary mr-2">•</span>
                  <span>Linear algebra and Ordinary Differential Equations</span>
                </div>
                <div className="flex items-center">
                  <span className="text-primary mr-2">•</span>
                  <span>Probability Theory</span>
                </div>
                <div className="flex items-center">
                  <span className="text-primary mr-2">•</span>
                  <span>Multi variable calculus</span>
                </div>
              </div>
              <p className="text-sm text-muted-foreground mt-2">*Ongoing</p>
            </section>

            <section>
              <h2 className="text-xl font-bold mb-4 text-primary">Positions of Responsibility</h2>
              <div>
                <div className="flex justify-between">
                  <h3 className="font-semibold">Senior Executive | Events | Techkriti'24 | IIT Kanpur</h3>
                </div>
                <ul className="list-disc list-inside mt-2 text-muted-foreground">
                  <li>
                    Invited teams from diverse colleges across India to participate in multiple events as part of the
                    institute's Techkriti technical fest.
                  </li>
                  <li>
                    Effectively managed and facilitated the successful execution of a wide range of events, including
                    BattleBots, Maneovre, IARC and Hovermania. This ensured the seamless operations and fostered
                    energetic participant engagement throughout the festival.
                  </li>
                </ul>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}

