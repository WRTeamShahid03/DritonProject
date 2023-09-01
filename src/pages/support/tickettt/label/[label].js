// ** Third Party Imports
import axios from 'axios'
import EmailAppLayout from 'src/pages/components/email/Email'

// ** Demo Components Imports

const EmailApp = ({ label }) => {
  return <EmailAppLayout label={label} />
}

export const getStaticPaths = async () => {
  const res = await axios.get('/apps/email/allEmails')
  const data = await res.data.emails

  const paths = data.map(mail => ({
    params: { label: mail.labels[0] }
  }))

  return {
    paths,
    fallback: false
  }
}

export const getStaticProps = ({ params }) => {
  return {
    props: {
      ...(params && params.label ? { label: params.label } : {})
    }
  }
}

EmailApp.contentHeightFixed = true

export default EmailApp
