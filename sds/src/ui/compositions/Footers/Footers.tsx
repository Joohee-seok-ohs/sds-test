import { useMediaQuery } from "hooks";
import { Flex, FlexItem, Section, type SectionProps } from "layout";
import {
  TextLink,
  TextLinkList,
  TextListItem,
  TextStrong,
} from "primitives";

// Figma 디자인의 실제 SVG 에셋들 (localhost에서 제공)
const figmaLogo = "http://localhost:3845/assets/f7670ccd9f4a0daef6ffdd182abe963966b9e064.svg";
const twitterIcon = "http://localhost:3845/assets/06d5686ebc43f358ce6232b368c6aaa3e6dc3c02.svg";
const instagramIcon = "http://localhost:3845/assets/6861e555b302aeb3c106fc8f569473bc6de7b388.svg";
const youtubeIcon = "http://localhost:3845/assets/7f3f966fdf4b0fd049db80f6afdf1614bcd3f100.svg";
const linkedinIcon = "http://localhost:3845/assets/5ea18c437665224c3c840c1832ded6b6c216b20a.svg";

export type FooterProps = Omit<SectionProps, "variant" | "padding" | "src">;
export function Footer({ className, ...props }: FooterProps) {
  const { isTabletDown } = useMediaQuery();
  const listDensity = isTabletDown ? "tight" : "default";
  return (
    <Section
      elementType="footer"
      variant="brand"
      paddingTop="1600"
      paddingBottom="4000"
      style={{ marginTop: "auto" }}
      {...props}
    >
      <Flex wrap type="quarter" gap="600" container>
        <FlexItem size="minor">
          <Flex direction="column" gap="600" alignSecondary="start">
            <FlexItem>
              {/* Figma 로고 SVG - 정확한 Figma 디자인 사이즈 */}
              <div style={{ width: '23.333px', height: '35px' }}>
                <img 
                  src={figmaLogo}
                  alt="Company logo" 
                  style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                />
              </div>
            </FlexItem>
            <FlexItem>
              {/* SNS 아이콘들 SVG - 24x24px */}
              <Flex gap="400" alignSecondary="center">
                <a href="https://www.twitter.com" aria-label="Twitter" style={{ display: 'block', width: '24px', height: '24px' }}>
                  <img src={twitterIcon} alt="Twitter" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                </a>
                <a href="https://www.instagram.com" aria-label="Instagram" style={{ display: 'block', width: '24px', height: '24px' }}>
                  <img src={instagramIcon} alt="Instagram" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                </a>
                <a href="https://www.youtube.com" aria-label="YouTube" style={{ display: 'block', width: '24px', height: '24px' }}>
                  <img src={youtubeIcon} alt="YouTube" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                </a>
                <a href="https://www.linkedin.com" aria-label="LinkedIn" style={{ display: 'block', width: '24px', height: '24px' }}>
                  <img src={linkedinIcon} alt="LinkedIn" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                </a>
              </Flex>
            </FlexItem>
          </Flex>
        </FlexItem>
        <TextLinkList
          density={listDensity}
          title={<TextStrong>Use cases</TextStrong>}
        >
          <TextListItem>
            <TextLink href="#">UI design</TextLink>
          </TextListItem>
          <TextListItem>
            <TextLink href="#">UX design</TextLink>
          </TextListItem>
          <TextListItem>
            <TextLink href="#">Wireframing</TextLink>
          </TextListItem>
          <TextListItem>
            <TextLink href="#">Diagramming</TextLink>
          </TextListItem>
          <TextListItem>
            <TextLink href="#">Brainstorming</TextLink>
          </TextListItem>
          <TextListItem>
            <TextLink href="#">Online whiteboard</TextLink>
          </TextListItem>
          <TextListItem>
            <TextLink href="#">Team collaboration</TextLink>
          </TextListItem>
        </TextLinkList>
        <TextLinkList
          density={listDensity}
          title={<TextStrong>Explore</TextStrong>}
        >
          <TextListItem>
            <TextLink href="#">Design</TextLink>
          </TextListItem>
          <TextListItem>
            <TextLink href="#">Prototyping</TextLink>
          </TextListItem>
          <TextListItem>
            <TextLink href="#">Development features</TextLink>
          </TextListItem>
          <TextListItem>
            <TextLink href="#">Design systems</TextLink>
          </TextListItem>
          <TextListItem>
            <TextLink href="#">Collaboration features</TextLink>
          </TextListItem>
          <TextListItem>
            <TextLink href="#">Design process</TextLink>
          </TextListItem>
          <TextListItem>
            <TextLink href="#">FigJam</TextLink>
          </TextListItem>
        </TextLinkList>
        <TextLinkList
          density={listDensity}
          title={<TextStrong>Resources</TextStrong>}
        >
          <TextListItem>
            <TextLink href="#">Blog</TextLink>
          </TextListItem>
          <TextListItem>
            <TextLink href="#">Best practices</TextLink>
          </TextListItem>
          <TextListItem>
            <TextLink href="#">Colors</TextLink>
          </TextListItem>
          <TextListItem>
            <TextLink href="#">Color wheel</TextLink>
          </TextListItem>
          <TextListItem>
            <TextLink href="#">Support</TextLink>
          </TextListItem>
          <TextListItem>
            <TextLink href="#">Developers</TextLink>
          </TextListItem>
          <TextListItem>
            <TextLink href="#">Resource library</TextLink>
          </TextListItem>
        </TextLinkList>
      </Flex>
    </Section>
  );
}
