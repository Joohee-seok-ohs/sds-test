import { useState } from 'react';
import { Section } from "layout";
import { Flex } from "layout";
import { TextHeading, Text } from "primitives";
import { Navigation, NavigationPill } from "primitives";
import { Accordion, AccordionItem } from "primitives";
import { PricingCard, pricingPlanToPricingCardProps } from "compositions";
import { Header, Footer } from "compositions";
import { usePricing } from "data";
import { useMediaQuery } from "hooks";

export function Pricing() {
  const { monthlyPlans } = usePricing();
  const { isMobile } = useMediaQuery();
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');
  
  // Responsive values based on Figma Code Connect
  const padding = isMobile ? "600" : "1200";
  const gap = isMobile ? "600" : "1200";
  const size = isMobile ? "small" : "large";
  
  // Use monthlyPlans for both since yearlyPlans doesn't exist in the context
  const currentPlans = monthlyPlans;

  return (
    <div className="pricing-page">
      {/* Header - Figma의 Header 컴포넌트 */}
      <Header />

      {/* Hero Section - Figma Design Match */}
      <Section variant="neutral" padding="4000">
        <Flex container direction="column" gap="200" alignPrimary="center" alignSecondary="center">
          <TextHeading style={{ 
            fontSize: '72px',
            fontWeight: 'bold',
            textAlign: 'center',
            letterSpacing: '-2.16px',
            lineHeight: '1.2'
          }}>
            Title
          </TextHeading>
          
          <Text style={{ 
            textAlign: 'center', 
            fontSize: '32px',
            color: 'var(--sds-color-text-default-secondary)',
            lineHeight: '1.2'
          }}>
            Subtitle
          </Text>
        </Flex>
      </Section>

      {/* Pricing Cards Section - Figma Code Connect Pattern */}
      <Section padding={padding}>
        <Flex container direction="column" gap={gap} alignSecondary="center">
          {/* Billing Cycle Toggle */}
          <Navigation>
            <NavigationPill 
              isSelected={billingCycle === 'monthly'}
              onPress={() => setBillingCycle('monthly')}
            >
              Monthly
            </NavigationPill>
            <NavigationPill 
              isSelected={billingCycle === 'yearly'}
              onPress={() => setBillingCycle('yearly')}
            >
              Yearly
            </NavigationPill>
            <NavigationPill 
              isSelected={false}
              onPress={() => {}}
            >
              Link
            </NavigationPill>
          </Navigation>

          {/* Pricing Cards Grid */}
          <div className="pricing-cards-grid">
            {currentPlans.map((plan, index) => (
              <PricingCard
                key={plan.sku}
                size={size}
                {...pricingPlanToPricingCardProps(plan, index)}
              />
            ))}
          </div>
        </Flex>
      </Section>

      {/* FAQ Section - Accordion */}
      <Section padding="1600">
        <Flex container direction="column" gap="1200" alignSecondary="center">
          <Flex direction="column" gap="200" alignPrimary="center" alignSecondary="center">
            <TextHeading style={{ 
              fontSize: '24px',
              fontWeight: '600',
              textAlign: 'center' 
            }}>
              Heading
            </TextHeading>
            <Text style={{ 
              fontSize: '20px',
              textAlign: 'center',
              color: 'var(--sds-color-text-default-secondary)' 
            }}>
              Subheading
            </Text>
          </Flex>
          
          <div className="faq-section">
            <Accordion>
                  <AccordionItem title="Title">
                    <Text>
                      Answer the frequently asked question in a simple sentence, a longish paragraph, or even in a list.
                    </Text>
                  </AccordionItem>
                  
                  <AccordionItem title="Title">
                    <Text>
                      Answer the frequently asked question in a simple sentence, a longish paragraph, or even in a list.
                    </Text>
                  </AccordionItem>
                  
                  <AccordionItem title="Title">
                    <Text>
                      Answer the frequently asked question in a simple sentence, a longish paragraph, or even in a list.
                    </Text>
                  </AccordionItem>
                  
                  <AccordionItem title="Title">
                    <Text>
                      Answer the frequently asked question in a simple sentence, a longish paragraph, or even in a list.
                    </Text>
                  </AccordionItem>
                  
                  <AccordionItem title="Title">
                    <Text>
                      Answer the frequently asked question in a simple sentence, a longish paragraph, or even in a list.
                    </Text>
                  </AccordionItem>
                </Accordion>
          </div>
        </Flex>
      </Section>


      {/* Footer - Using SDS Footer Component with SNS icon override */}
      <Footer style={{ 
        background: 'var(--sds-color-background-default-default)',
        color: 'var(--sds-color-text-default-default)',
        borderTop: '1px solid var(--sds-color-border-default-default)'
      }} />
    </div>
  );
}