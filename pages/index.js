import Image from 'next/image'

export default function Home() {
  return (
    <main>
      <h3>This causes a layout shift (using next/image)</h3>
      <p>
        We noticed that you are from 
        <Image
          alt="Argentina flag"
          width={16}
          height={12}
          src={`https://lipis.github.io/flag-icon-css/flags/4x3/ar.svg`}
        />
        . We are offering purchasing power parity pricing. If that is
        something that you need:
      </p>
      <hr />
      <h3>This does not (using img tag)</h3>
      <p>
        We noticed that you are from 
        <img
          alt="Argentina flag"
          width={16}
          height={12}
          src={`https://lipis.github.io/flag-icon-css/flags/4x3/ar.svg`}
        />
        . We are offering purchasing power parity pricing. If that is
        something that you need:
      </p>
    </main>
  )
}
