import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        'woman' : 'url("https://cdn.pixabay.com/photo/2016/08/25/07/14/smartphone-1618909_1280.jpg")',
        'woman-two' : 'url("https://cdn.pixabay.com/photo/2016/02/28/08/57/black-1226643_1280.jpg")',
        'smooke' : 'url("https://cdn.pixabay.com/photo/2016/03/17/18/05/smoke-1263484_1280.jpg")',
        'photo-one' : 'url("https://cdn.pixabay.com/photo/2017/08/01/09/26/black-and-white-2563923_640.jpg")',
        'photo-two' : 'url("https://cdn.pixabay.com/photo/2017/04/20/15/05/girl-2245926_640.jpg")',
        'photo-three' : 'url("https://cdn.pixabay.com/photo/2017/05/09/16/27/girl-2298707_640.jpg")',
        'photo-lines' : 'url("https://cdn.pixabay.com/photo/2023/12/07/16/41/ink-8435869_640.jpg")',
        'landscape' : 'url("https://cdn.pixabay.com/photo/2014/07/21/18/31/kuala-lumpur-398792_1280.jpg")',
        'landscape-one' : 'url("https://cdn.pixabay.com/photo/2016/07/28/19/38/lost-places-1549096_640.jpg")',
        'landscape-two' : 'url("https://cdn.pixabay.com/photo/2017/10/29/15/14/budapest-2899950_1280.jpg")',
        'landscape-three' : 'url("https://cdn.pixabay.com/photo/2016/07/06/23/55/black-and-white-1501671_640.jpg")',
        'landScape-transiction' : 'url("https://cdn.pixabay.com/photo/2013/08/05/06/21/sunset-169925_1280.jpg")',
        'parallax-one' : 'url("https://cdn.pixabay.com/photo/2023/11/07/22/59/building-8373618_1280.jpg")',
        'parallax-two' : 'url("https://cdn.pixabay.com/photo/2022/01/29/09/01/bird-6976834_1280.jpg")',
        'parallax-three' : 'url("https://cdn.pixabay.com/photo/2020/06/29/06/00/houseplant-5351570_640.jpg")',
        'loop-one' : 'url("https://cdn.pixabay.com/photo/2023/07/31/17/06/couple-8161451_640.jpg"),',
        'loop-two' : 'url("https://cdn.pixabay.com/photo/2020/02/11/10/24/sea-4839056_640.jpg")',
        'loop-three' : 'url("https://cdn.pixabay.com/photo/2024/01/06/15/26/ai-generated-8491587_640.jpg")',
        'loop-four' : 'url("https://cdn.pixabay.com/photo/2024/03/07/10/38/simba-8618301_640.jpg")',
        'loop-five' : 'url("https://cdn.pixabay.com/photo/2023/09/02/18/07/escalator-8229360_640.jpg")',
        'loop-six' : 'url("https://cdn.pixabay.com/photo/2023/12/23/22/15/teen-photo-8466399_640.jpg")',
        'loop-seven' : 'url("https://cdn.pixabay.com/photo/2024/02/02/13/37/enduro-8548196_640.jpg")',
        'loop-eight' : 'url("https://cdn.pixabay.com/photo/2023/10/24/21/15/nature-8339115_640.jpg")',
        'loop-nine' : 'url("https://cdn.pixabay.com/photo/2023/12/13/06/40/cat-8446390_640.jpg")',
        'loop-ten' : 'url("https://cdn.pixabay.com/photo/2023/08/15/14/13/harvest-8192037_640.jpg")',
      },
      animation: {
        "loop-scroll" : 'loop-scroll 70s linear infinite',
        "loop-two" : 'loop-two 40s linear infinite',
        "loop-three" : 'loop-two 45s linear infinite',
        "loop-four" : 'loop-scroll 50s linear infinite',
      },
      keyframes : {
        "loop-scroll" : {
          from : {transform : "translateY(0)"},
          to: {transform : "translateY(-100%)"}
        },
        "loop-two" : {
          from : {transform : "translateY(-100%)"},
          to: {transform : "translateY(0%)"}
        },
      }
    },
  },
  plugins: [],
};
export default config;
