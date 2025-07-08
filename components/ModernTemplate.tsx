import React from "react";
import { TemplateProps } from "../types";
import { Header } from "./Header";
import { Hero } from "./Hero";
import { MascotCTA } from "./MascotCTA";
import { Commitment } from "./Commitment";
import { SpecialOffers } from "./SpecialOffers";
import { Services } from "./Services";
import { WhyWait } from "./WhyWait";
import { AreasServed } from "./AreasServed";
import { ContactFooter } from "./ContactFooter";
import { Footer } from "./Footer";
import {
  generateCssVariables,
  getGlobalStaticStyles,
} from "./ModernTemplate.styles";

const ModernTemplateComponent = ({
  data,
  isPreview = false,
}: TemplateProps) => {
  const { content, design, logoUrl } = data;

  const cssVariables = React.useMemo(
    () => generateCssVariables(design),
    [design]
  );
  const globalStaticStyles = React.useMemo(
    () => getGlobalStaticStyles(isPreview),
    [isPreview]
  );

  // Use areasServed as fallback for serviceAreas
  const serviceAreas = content.serviceAreas || content.areasServed || [];

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: cssVariables }} />
      <style dangerouslySetInnerHTML={{ __html: globalStaticStyles }} />

      <Header logoUrl={logoUrl} company={content.company} />
      <Hero
        hero={content.hero}
        contact={content.contact}
        companyName={content.company.name}
      />
      <MascotCTA
        logoUrl={logoUrl}
        mascot={content.mascot}
        message={
          content.mascot?.messages.urgent ||
          "Don't Wait - Call the Experts Now!"
        }
        buttonText={`Call Now! | ${
          content.contact.emergencyPhone || content.contact.phone
        }`}
      />
      <Commitment aboutBlock={content.aboutBlock} />
      <MascotCTA
        logoUrl={logoUrl}
        mascot={content.mascot}
        message={
          content.mascot?.messages.emergency || "Available 24/7 for Emergencies"
        }
        buttonText={`Call Now! | ${
          content.contact.emergencyPhone || content.contact.phone
        }`}
        isReversed
      />
      {content.offers && content.offers.length > 0 && (
        <SpecialOffers offers={content.offers} contact={content.contact} />
      )}
      <Services services={content.services} contact={content.contact} />
      <WhyWait whyWait={content.whyWait} />
      {serviceAreas.length > 0 && <AreasServed serviceAreas={serviceAreas} />}
      <ContactFooter />
      <Footer
        logoUrl={logoUrl}
        companyName={content.company.name}
        footer={content.footer}
      />
    </>
  );
};

export const ModernTemplate = React.memo(ModernTemplateComponent);
