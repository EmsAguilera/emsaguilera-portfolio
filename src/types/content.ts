// Content types
export type Dictionary = {
  navbar: {
    about: string;
    experience: string;
    contact: string;
  };
  hero: {
    greeting: string;
    subtitle: string;
    button: string;
    button2: string;
  };
  about: {
    about_me: {
      title: string;
      subheading: string;
      body: string[];
      image: {
        src: string;
        alt: string;
      };
      button: string;
    };
    education_section: {
      title: string;
      entries: {
        institution: string;
        degree: string;
        date: string;
        description: string;
        certificates: {
          text: string;
          url: string;
        }[];
      }[];
    };
    logo_cloud: {
      title: string;
      logos: {
        name: string;
        src: string;
      }[];
    };
    skills_section: {
      title: string;
      skills: {
        category: string;
        list: string[];
      }[];
    };
  };
  timeline: {
    title: string;
    events: TimelineEvent[];
  };
  gallery: {
    title: string;
    images: {
      src: string;
      alt: string;
    }[];
  };
  experience: {
    title: string;
    subheading: string;
    filters: string[];
    view_details_button: string;
    back_button: string;
    items: ExperienceItem[];
  };
  contact: {
    title: string;
    subheading: string;
    social_title: string;
    form: {
      name: string;
      surname: string;
      email: string;
      message: string;
      submit: string;
      status: {
        sending: string;
        success: string;
        error: string;
      }
    }
  };
  footer: {
    socials: { name: string; url: string }[];
    columns: {
      title: string;
      links: { text: string; url: string }[];
    }[];
  };
};

export type TimelineEvent = {
  date: string;
  title: string;
  description: string;
  category: string;
};

export type ExperienceItem = {
  slug: string;
  title: string;
  company: string;
  date: string;
  category: string;
  image: string;
  summary: string;
  details: string; 
};