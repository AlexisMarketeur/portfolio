import { raleway } from "./fonts";

export default function Home() {
  return (
    <div className="flex w-screen h-screen justify-center items-center flex-col gap-24">
      <h1
        className={`text-[250px] font-medium leading-none tracking-tight ${raleway.className}`}
      >
        FREELANCE <br />
        GOOGLE ADS
        <br /> PARTNER
      </h1>
      <p className={raleway.className}>my projects</p>
      <p
        className={`w-[850px] mb-52 text-xl text-slate-500 ${raleway.className}`}
      >
        With 20 years of hands-on marketing experience, 8 years of C-level
        strategic expertise, and a background in communications, I am the
        facilitator who empowers teams and grows brands. My approach? Focus on
        empowerment, teamwork, and concrete goals, with a promise of growth and
        measurable results. Managers who demand the spotlight? That’s not my
        style. I shine by enabling others to excel and by achieving results
        together. I have a passion for leading and inspiring managers and teams,
        and I am always ready to actively participate where necessary. My motto:
        get things done.
      </p>
      <p className="w-[850px] mb-52 text-xl text-slate-500">
        With 20 years of hands-on marketing experience, 8 years of C-level
        strategic expertise, and a background in communications, I am the
        facilitator who empowers teams and grows brands. My approach? Focus on
        empowerment, teamwork, and concrete goals, with a promise of growth and
        measurable results. Managers who demand the spotlight? That’s not my
        style. I shine by enabling others to excel and by achieving results
        together. I have a passion for leading and inspiring managers and teams,
        and I am always ready to actively participate where necessary. My motto:
        get things done.
      </p>
    </div>
  );
}
