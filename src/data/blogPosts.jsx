import OndaedesAppBlogPost from "../components/pages/posts/OndaedesApp"
import OndaedesSiteBlogPost from "../components/pages/posts/OndaedesSite";

const blogPosts = [
  {
    title: "Desenvolvimento do Aplicativo Ondaedes",
    description: "App Android desenvolvido em React Native para Ondaedes. Neste posts temos um estudo de caso da proposta e o que foi desenvolvido.",
    thumbnail: "/images/ondaedes/app-banner.png",
    thumbnailAlt: "Aplicativo Ondaedes",
    publishDate: "05 de Dezembro, 2024",
    techList: "Expo, Android, React Native",
    link: "/posts/ondaedesapp",
    content: OndaedesAppBlogPost,
  },
  {
    title: "Desenvolvimento do Site Ondaedes",
    description: "Página Ondaedes desenvolvida com aplicação de georreferenciamento Big Data.",
    thumbnail: "/images/ondaedes/logo.png",
    thumbnailAlt: "Página Ondaedes",
    publishDate: "05 de Dezembro, 2024",
    techList: "Flask, QGIS, MapBox, Python",
    link: "/posts/ondaedessite",
    content: OndaedesSiteBlogPost,
  },
]

export {blogPosts};