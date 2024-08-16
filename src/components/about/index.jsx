import clsx from "clsx";
import React from "react";

const ItemLayout = ({ children, className }) => {
  return (
    <div
      className={clsx(
        "custom-bg p-8 rounded-xl flex items-center justify-center space-y-8",
        className
      )}
    >
      {children}
    </div>
  );
};

const AboutDetails = () => {
  return (
    <section className="py-20 w-full">
      <div className="grid grid-cols-12 gap-8 w-full">
        <ItemLayout className={'col-span-8 row-span-2 flex-col items-start'}>
        <h2 className="text-2xl text-left w-full capitalize">
          Architects of Enchantment
        </h2>
        <p className="font-light">
        At the intersection of code and creativity, we craft digital realms where innovation meets imagination. From concept to code, we design and engineer extraordinary experiences that inspire and captivate. Transforming visions into reality, we build the digital landscapes of tomorrow, creating legacies that resonate and endure.
        </p>
        </ItemLayout>

        <ItemLayout className={'col-span-4 text-accent'}>
        <p className="font-semibold w-full text-left text-5xl">
          25+ <sub className="font-semibold text-base">clients</sub>
        </p>
        </ItemLayout>

        <ItemLayout className={'col-span-4 text-accent'}>
        <p className="font-semibold w-full text-left text-5xl">
          4+ <sub className="font-semibold text-base">years of experience</sub>
        </p>
        </ItemLayout>

        <ItemLayout className={'col-span-4 !p-0'}>
            <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=scripted-bgd&theme=transparent&hide_border=true&title_color=FEFE5B&text_color=FFFFFF&icon_color=FEFE5B&text_bold=false" alt="Scripted" loading="lazy" />
        </ItemLayout>

        <ItemLayout className={'col-span-8 !p-0'}>
            <img className="w-full h-auto" src="https://github-readme-stats.vercel.app/api?username=scripted-bgd&theme=transparent&hide_border=true&title_color=FEFE5B&text_color=FFFFFF&icon_color=FEFE5B&text_bold=false" alt="Scripted" loading="lazy" />
        </ItemLayout>

        <ItemLayout className={'col-span-full'}>
            <img className="w-full h-auto" src="https://skillicons.dev/icons?i=appwrite,aws,babel,bootstrap,cloudflare,css,d3,docker,figma,firebase,gatsby,github,graphql,html,ipfs,js,jquery,kubernetes,linux,mongodb,mysql,netlify,nextjs,nodejs,npm,postgres,react,redux,replit,sass,supabase,tailwind,vercel,vite,vscode,yarn" alt="Scripted" loading="lazy" />
        </ItemLayout>

        <ItemLayout className={'col-span-6 !p-0'}>
        <img className="w-full h-auto" src="https://github-readme-streak-stats.herokuapp.com?user=misabj&theme=transparent&hide_border=true&type=png&border=EB545400&ring=FEFE5B&currStreakLabel=FEFE5B" alt="Scripted" loading="lazy" />
        </ItemLayout>

        <ItemLayout className={'col-span-6 !p-0'}>
            <img className="w-full h-auto" src="https://github-readme-stats.vercel.app/api/pin/?username=anuraghazra&repo=github-readme-stats&theme=transparent&hide_border=true&title_color=FEFE5B&text_color=FFFFFF&icon_color=FEFE5B&text_bold=false" alt="Scripted" loading="lazy" />
        </ItemLayout>
        
       
        
      </div>
    </section>
  );
};

export default AboutDetails;
