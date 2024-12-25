// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-home",
    title: "home",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publications",
          title: "publications",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-student-orientation",
          title: "student orientation",
          description: "A list of student projects that I advised over the last years",
          section: "Navigation",
          handler: () => {
            window.location.href = "/studentOrientation/";
          },
        },{id: "nav-projects",
          title: "projects",
          description: "A growing collection of your cool projects I participated.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-repositories",
          title: "repositories",
          description: "A list of the open-access repositories with some of the cool projects I was part of.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/repositories/";
          },
        },{id: "nav-cv",
          title: "cv",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "post-google-gemini-updates-flash-1-5-gemma-2-and-project-astra",
      
        title: 'Google Gemini updates: Flash 1.5, Gemma 2 and Project Astra <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
      
      description: "We’re sharing updates across our Gemini family of models and a glimpse of Project Astra, our vision for the future of AI assistants.",
      section: "Posts",
      handler: () => {
        
          window.open("https://blog.google/technology/ai/google-gemini-update-flash-ai-assistant-io-2024/", "_blank");
        
      },
    },{id: "post-displaying-external-posts-on-your-al-folio-blog",
      
        title: 'Displaying External Posts on Your al-folio Blog <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.open("https://medium.com/@al-folio/displaying-external-posts-on-your-al-folio-blog-b60a1d241a0a?source=rss-17feae71c3c4------2", "_blank");
        
      },
    },{id: "news-best-poster-awards-at-lacoro-2024",
          title: 'Best Poster Awards at LACORO 2024',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/announcement_1/";
            },},{id: "projects-chef-s-hat-multiplayer-card-game",
          title: 'Chef`s Hat Multiplayer Card Game',
          description: "Bulding a platform for social interaction and artificial intelligence studies based on a multiplayer card game.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_chefshat/";
            },},{id: "projects-crossmodal-learning-in-a-neurobotic-cortical-and-midbrain-model",
          title: 'Crossmodal learning in a neurobotic cortical and midbrain model',
          description: "Understand and model the brains mechanism for crossmodal learning",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_cml/";
            },},{id: "projects-facechannel",
          title: 'FaceChannel',
          description: "A ligth-weighted neural network for facial expression description",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_faceChannel/";
            },},{id: "projects-omg-empathy-dataset",
          title: 'OMG-Empathy Dataset',
          description: "A dataset for story-driven narrative impact prediction",
          section: "Projects",handler: () => {
              window.location.href = "/projects/4_OMGEmpathy/";
            },},{id: "projects-shreckbots",
          title: 'Shreckbots',
          description: "A chatbot management system",
          section: "Projects",handler: () => {
              window.location.href = "/projects/5_Shreckbots/";
            },},{id: "projects-my-game-log",
          title: 'My Game Log',
          description: "A solution for video game collection management",
          section: "Projects",handler: () => {
              window.location.href = "/projects/6_MyGameLog/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%70%61%62%6C%6F%76%69%6E@%67%6D%61%69%6C.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/pablovin", "_blank");
        },
      },{
        id: 'social-lattes',
        title: 'Lattes',
        section: 'Socials',
        handler: () => {
          window.open("http://lattes.cnpq.br/7344629947673971", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/pablo-barros-6a4a3b31", "_blank");
        },
      },{
        id: 'social-orcid',
        title: 'ORCID',
        section: 'Socials',
        handler: () => {
          window.open("https://orcid.org/0000-0002-6517-682X", "_blank");
        },
      },{
        id: 'social-rss',
        title: 'RSS Feed',
        section: 'Socials',
        handler: () => {
          window.open("/feed.xml", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=LU9tpkMAAAAJ&hl", "_blank");
        },
      },{
        id: 'social-custom_social',
        title: 'Custom_social',
        section: 'Socials',
        handler: () => {
          window.open("", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
