const TabContent = ({ activeTab }) => {
  const content = {
    Visa: (
      <div className="space-y-4">
        <h2>Visa Information</h2>
        <p>
          Visitors to India must obtain a visa unless they come from one of the
          visa-exempt countries. Nationals of certain countries may obtain a
          visa on arrival or an e-Visa online. Do check with your travel agent
          or the Indian Consulate website{" "}
          <a href="#" className="underline">
            here
          </a>
          .
        </p>
        <p>
          An applicant for a visa shall have to submit an application on the
          online system in the standard visa application form. For this purpose,
          the applicants may log on to{" "}
          <a href="https://indianvisaonline.gov.in">
            https://indianvisaonline.gov.in
          </a>
          . The applicant should be present within the jurisdiction of the
          Indian Mission/Post concerned at the time of making an application and
          grant of visa.
        </p>
        <p>
          Period of validity of passport and visa passport should have at least
          six months validity at the time of making application for grant of
          visa. It should have at least two blank pages for stamping by the
          Immigration Officer. The validity of all visas will commence from the
          date of issue of visa.
        </p>
        <p>
          We recommend that you apply for a tourist visa for ease of application
          process.
        </p>
        <p>
          Travel Advisory: Check back frequently for the latest information
          about COVID-19 travel and testing requirements for traveling to India.
        </p>
      </div>
    ),
    "Stay Connected": <div>Stay Connected content</div>,
    "Covid - 19": <div>Covid - 19 content</div>,
    "Flight Info": <div>Flight Info content</div>,
    Weather: <div>Weather content</div>,
    "Ground Transport": <div>Ground Transport content</div>,
    "Language Etiquette": <div>Language Etiquette content</div>,
    "Time Zone": <div>Time Zone content</div>,
    "Dress Code": <div>Dress Code content</div>,
    Currency: <div>Currency content</div>,
  }

  return content[activeTab] || null
}

export default TabContent
