import { AboutMeHeaderModule } from "~/components/Modules/AboutMe/AboutMeHeaderModule";
import { AboutMeContentModule } from "~/components/Modules/AboutMe/AboutMeContentModule";
import { Layout } from "antd";
import { Content, Footer, Header } from "antd/es/layout/layout";
import { FooterModule } from "~/components/Modules/Footer/FooterModule";

type Props = {
  aboutMeHeaderModuleProps: React.ComponentProps<typeof AboutMeHeaderModule>;
  aboutMeContentModuleProps: React.ComponentProps<typeof AboutMeContentModule>;
  footerModuleProps: React.ComponentProps<typeof FooterModule>;
};

export const AboutMeTemplate = (props: Props) => {
  return (
    <Layout style={{ height: "100%", position: "relative" }}>
      <Header style={{ width: "100%", height: "100%", padding: 0 }}>
        <AboutMeHeaderModule {...props.aboutMeHeaderModuleProps} />
      </Header>

      <Content>
        {/* <AboutMeFooterModule {...props.aboutMeFooterModuleProps} /> */}
        <AboutMeContentModule {...props.aboutMeContentModuleProps} />
      </Content>

      <Footer style={{ padding: 0 }}>
        <FooterModule {...props.footerModuleProps} />
      </Footer>
    </Layout>
  );
};
