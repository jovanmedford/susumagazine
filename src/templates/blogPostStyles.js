import tw, { css } from "twin.macro"

const containerStyle = css`
  ${tw`mt-5 mx-auto lg:mt-10`}

  width: 90%;
  max-width: 42ch;

  p {
    ${tw`font-serif leading-normal mb-4
         lg:text-md lg:mb-6`}
  }

  @media screen and (min-width: 768px) {
    max-width: 48ch;
  }

  @media screen and (min-width: 1024px) {
    max-width: 56ch;
  }
`

const blogPostStyles = css`
  ${containerStyle}

  h2 {
    ${tw`mt-8 mb-2 font-bold text-primary-500 text-lg 
        lg:text-xl lg:mt-12
        `}
  }

  h3 {
    ${tw`mt-6 mb-4 font-bold text-md 
        lg:text-lg lg:mt-10 lg:mb-6`}
  }

  a {
    ${tw`text-primary-700 underline`}
  }

  ul,
  ol {
    margin-left: 2rem;
    margin-bottom: 1rem;
    font-family: Lora, serif;
  }

  ul {
    list-style: disc;
  }

  ol {
    list-style: auto;
  }

  li {
    margin-bottom: 0.5rem;
    ${tw`text-base lg:text-md`}
  }

  strong {
    ${tw`font-bold`}
  }

  figcaption {
    font-family: Lora, serif;
    ${tw`text-center`}
  }

  blockquote {
    ${tw`ml-4 border-primary-500`}
    border-left: 2px solid;
    padding: 1rem 0 0.5rem 1rem;
    background: #eeebf5;
  }
`

export { blogPostStyles }
