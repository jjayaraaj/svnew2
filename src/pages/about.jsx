import Image from 'next/image'
import Head from 'next/head'
import Link from 'next/link'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import {
  TwitterIcon,
  InstagramIcon,
  GitHubIcon,
  LinkedInIcon,
} from '@/components/SocialIcons'
import portraitImage from '@/images/avatar2.jpeg'

function SocialLink({ className, href, children, icon: Icon }) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}

function MailIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  )
}

export default function About() {
  return (
    <>
      <Head>
        <title>About - Sathyan Velumani</title>
        <meta
          name="description"
          content="I’m Sathyan Velumani. I live in Chennai/Hyderabad, India."
        />
      </Head>
      <Container className="mt-16 sm:mt-32">
        <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
          <div className="lg:pl-20">
            <div className="max-w-xs px-2.5 lg:max-w-none">
              <Image
                src={portraitImage}
                alt=""
                sizes="(min-width: 1024px) 32rem, 20rem"
                className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
              />
            </div>
          </div>
          <div className="lg:order-first lg:row-span-2">
            <h1 className="text-3xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
            I’m Sathyan Velumani, </h1>
            <h1 className="text-3xl font-medium tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">Product Designer, India</h1>
            
            <div className="text-1xl mt-3 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
              <p>
                I enjoy understanding complex domains and breaking it down to design product experiences. 
                Today, you will find me designing, learning and coaching from a bunch of amazing designers/researchers and writers in a small design team that I lead in Chargebee.
              </p>
              <p>
              I have 15+ years of experience in Contextual Design, User Interface and Experience Design in the field of Rural Indian mobile VAS, Mobile applications and services, and Social Web. I have created strategies for online promotion and social media for web businesses and managed execution to increase business profitability. Passionate about understanding the innate user needs and developing solutions by leveraging the latest technological advancements in Mobile telecom and Social web.
              </p>
              <div className="p-2 rounded-md border-blue-200 border-dashed border-2">
            <ul role="list">
              <SocialLink href="http://www.twitter.com/sathyan" target="_blank" icon={TwitterIcon}>
                @sathyan
              </SocialLink>
              <SocialLink href="ttp://www.instagram.com/sathyan.velumani" target="_blank" icon={InstagramIcon} className="mt-4">
                @sathyan.velumani
              </SocialLink>
              {/* <SocialLink href="#" icon={GitHubIcon} className="mt-4">
                Follow on GitHub
              </SocialLink> */}
              <SocialLink href="ttp://www.linkedin.com/sathyan.velumani" target="_blank" icon={LinkedInIcon} className="mt-4">
              @sathyan.velumani
              </SocialLink>
              <SocialLink
                href="mailto:sathyan.velumani@gmail.com"
                icon={MailIcon}
                className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
              >
                sathyan.velumani@gmail.com
              </SocialLink>
            </ul>
          </div>
             
            </div>
          </div>
          
        </div>
      </Container>
    </>
  )
}
