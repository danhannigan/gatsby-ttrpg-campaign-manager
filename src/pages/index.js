import React from "react"
import LayoutHomepage from "ui/LayoutHomepage"
import SEO from "components/seo"
import { Styled, Image, Box, Text } from "theme-ui"

const IndexPage = () => (
  <LayoutHomepage>
    <SEO title="Home" />

    <Box>
      <Image src={"https://source.unsplash.com/collection/3529549/900x400"} />
    </Box>

    <Box
      sx={{
        pt: 3,
      }}
    >
      <Text>
        <Styled.h3>The story so far...</Styled.h3>

        <Styled.p>
          Four heroes are bound together by a journey in the land of Eberron.
          Their adventure starts simple enough: following the promise of
          adventure and exploration around the continent of Khorvaire, aboard an
          experimental airship known as the Celeste Noir, captained by the
          famous gnome cartographer Angelica d’Sivis.
        </Styled.p>

        <Styled.p>
          But things in Eberron are not always as they seem, and the land is
          plagued by secret plots and corruption. The real Angelica was found
          dead in Sharn! The impostor was an unknown Doppelgänger that likely
          belonged to some kind of cult. This impostor, along with most of the
          crew of the Celeste Noir, was killed during a vicious battle aboard
          the airship. Aubrey fled into the night…
        </Styled.p>

        <Styled.p>
          Through new found connections the party has been pulled into a plot
          much larger than their original adventure. The potential fate of
          Eberron is in their hands…
        </Styled.p>
      </Text>
    </Box>
  </LayoutHomepage>
)

export default IndexPage
