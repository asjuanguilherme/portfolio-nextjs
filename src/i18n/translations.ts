import { Locale } from './locales'

export interface Translations {
  METADATA: {
    SITE_TITLE: string
    DESCRIPTION: string
  }
  COMMON: {
    DEVELOPER_TITLE: string
  }
  UI: {
    SIDEBAR: {
      CONTACT_ME: string
      NAVIGATION: {
        START: string
        ABOUT: string
        EXPERIENCES: string
        EXPERTISES: string
        PROJECTS: string
        TESTIMONIALS: string
      }
    }
    FOOTER: {
      HAVE_A_PROJECT_IN_MIND: string
      LETS_CONNECT: string
      COPYRIGHT_TEXT: string
    }
    LANGUAGES: Record<Locale, string>
  }
  ONBOARDING: {
    WELCOME: {
      GREETINGS: string
    }
  }
  HOME: {
    SECTIONS: {
      HERO: {
        SUBTITLE: string
        COMPLETED_PROJECTS: string
        YEARS_OF_EXPERIENCE: string
      }
      ABOUT: {
        TITLE: string
        CONTENT: string
      }
      SERVICES: {
        TITLE: string
        SOFTWARE_DEVELOPMENT: {
          TITLE: string
          CONTENT: string
        }
        UI_DESIGN: {
          TITLE: string
          CONTENT: string
        }
      }
      EXPERTISES: {
        TITLE: string
      }
      EXPERIENCES: {
        TITLE: string
      }
      PROJECTS: {
        TITLE: string
      }
      TESTIMONIALS: {
        TITLE: string
      }
    }
  }
  PROJECT_DETAILS: {
    PAGE_TITLE: string
    SECTIONS: {
      ABOUT_THE_PROJECT: {
        TITLE: string
      }
      TECHNOLOGIES_AND_TOOLS: {
        TITLE: string
      }
    }
  }
  ACTION_BUTTONS: {
    VIEW_PUBLISHED_PROJECT: string
    SEE_PROJECT_DETAILS: string
    RETURN: string
    DOWNLOAD_CV: string
    SEE_MY_WORK: string
  }
}
