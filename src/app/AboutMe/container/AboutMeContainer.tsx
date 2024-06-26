import { useSnapshot } from "valtio";
import { AboutMeTemplate } from "~/components/Templates/AboutMe/AboutMeTemplate";
import { NavData } from "~/data/NavData";
import DrawerStore from "~/store/DrawerStore";
import SliderStore from "~/store/SliderStore";
import NavStore from "~/store/NavStore";
import { AboutContentData } from "~/data/About/AboutContentData";
import { AboutEventData } from "~/data/About/AboutEventData";

export const AboutMeContainer = () => {
  const nav = useSnapshot(NavStore.state);
  const drawer = useSnapshot(DrawerStore.state);
  const slider = useSnapshot(SliderStore.state);
  const aboutmeTemplateProps: React.ComponentProps<typeof AboutMeTemplate> = {
    aboutMeHeaderModuleProps: {
      title: "",
      navBarProps: {
        home: "",
        showDrawer() {
          DrawerStore.open();
        },
        showSideDrawer() {
          SliderStore.open();
        },
        links: NavData,
        theme: false,
        // theme: nav.theme,
      },
      drawerProps: {
        openDrawer: drawer.open,
        theme: drawer.theme,
        onCloseDrawer() {
          DrawerStore.close();
        },
      },
      sideDrawerProps: {
        openSideDrawer: slider.open,
        onCloseSideDrawer() {
          SliderStore.close();
        },
        theme: slider.theme,
      },
      headerProps: {
        title: "About me",
        nav: ["Pages", "About Me", "#"],
      },
    },
    aboutMeContentModuleProps: {
      title: "AboutMe contentModule",
      aboutContentProps: AboutContentData,
      evenProps: {
        eventsData: AboutEventData,
      },
    },
    footerModuleProps: {
      upperFooterProps: {
        logo: "logo",
      },
      lowerFooterProps: {},
    },
  };

  return <AboutMeTemplate {...aboutmeTemplateProps} />;
};
