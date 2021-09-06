import React from "react"
import Layout from "../components/Layout"
import tw from "twin.macro"
export default function Thanks() {
  return (
    <Layout>
      <div tw="text-center mt-12 md:mt-16 lg:mt-24">
        <h1 tw="text-primary-700">Thank you!</h1>
        <p tw="mx-4 mt-4 md:mx-auto max-w-xl">
          We appreciate you taking the time to send us a message. A member from
          our team will be in touch with you soon.
        </p>
      </div>
    </Layout>
  )
}
