import React from "react";
import ItemLayout from "./ItemLayout";
import Link from "next/link";
import Image from "next/image";

const AboutDetails = () => {
  return (
    <section className="py-20 w-full">
      <div className="grid grid-cols-12 gap-4 xs:gap-6  md:gap-8 w-full">
        <ItemLayout
          className={
            " col-span-full lg:col-span-8 row-span-2 flex-col items-start"
          }
        >
          <h2 className="  text-xl md:text-2xl text-left w-full capitalize">
            Architect of Enchantment
          </h2>
          <p className="font-light  text-xs sm:text-sm md:text-base   ">
            My journey in software development is fueled by a passion for creating 
            impactful solutions that bridge technology and real-world needs. From 
            building MediTrack, a comprehensive healthcare management system, to 
            crafting PyMeet for seamless virtual collaboration, I transform complex 
            challenges into elegant digital experiences. With expertise in full-stack 
            development, I&apos;ve engineered personal finance trackers, secure note-taking 
            applications like NoteVault, and efficient bookstore ordering systems. 
            Wielding modern frameworks like React.js, Next.js, and Python, I create 
            robust, scalable applications that blend functionality with intuitive design. 
            Join me as I continue to innovate and shape the future of web development.
          </p>
        </ItemLayout>

        {/* <ItemLayout
          className={" col-span-full xs:col-span-6 lg:col-span-4 text-accent"}
        >
          <p className="font-semibold w-full text-left text-2xl sm:text-5xl">
            25+ <sub className="font-semibold text-base">clients</sub>
          </p>
        </ItemLayout>

        <ItemLayout
          className={"col-span-full xs:col-span-6 lg:col-span-4 text-accent"}
        >
          <p className="font-semibold w-full text-left text-2xl sm:text-5xl">
            4+{" "}
            <sub className="font-semibold text-base">years of experience</sub>
          </p>
        </ItemLayout> */}

        <ItemLayout
          className={"col-span-full sm:col-span-6 md:col-span-4 !p-0"}
        >
          <Image
            className="w-full h-auto"
            src="https://github-readme-stats.vercel.app/api/top-langs?username=KritiPuri&theme=transparent&hide_border=true&title_color=FEFE5B&text_color=FFFFFF&icon_color=FEFE5B&text_bold=false"
            alt="Language Stats"
            width={500}
            height={300}
            priority
            loading="eager"
            unoptimized={true}
          />
        </ItemLayout>

        <ItemLayout className={"col-span-full md:col-span-8 !p-0"}>
          <Image
            className="w-full h-auto"
            src="https://github-readme-stats.vercel.app/api?username=KritiPuri&theme=transparent&hide_border=true&title_color=FEFE5B&text_color=FFFFFF&icon_color=FEFE5B&text_bold=false"
            alt="Git Stats"
            width={800}
            height={300}
            priority
            loading="eager"
            unoptimized={true}
          />
        </ItemLayout>

        <ItemLayout className={"col-span-full"}>
          <Image
            className="w-full h-auto"
            src={`https://skillicons.dev/icons?i=arduino,bootstrap,c,cpp,css,git,github,html,js,linux,nextjs,nodejs,npm,react,replit,sass,tailwind,threejs,ubuntu,vite,vscode,windows,wordpress`}
            alt="Skills"
            width={1200}
            height={100}
            priority
            loading="eager"
            unoptimized={true}
          />
        </ItemLayout>

        <ItemLayout className={"col-span-full md:col-span-6 !p-0"}>
            <Image
              className="w-full h-auto"
              src="https://leetcard.jacoblin.cool/kriti_puri?theme=dark&font=Syne%20Tactile&ext=heatmap&cache=0"
              alt="LeetCode Stats"
              width={600}
              height={300}
              priority
              loading="eager"
              unoptimized={true}
            />
        </ItemLayout>
      </div>
    </section>
  );
};

export default AboutDetails;