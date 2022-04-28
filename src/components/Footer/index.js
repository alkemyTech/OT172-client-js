import React from 'react'

import instaLogo from '../utils/assets/instaLogo.png'
import faceLogo from '../utils/assets/faceLogo.png'
import linkLogo from '../utils/assets/linkLogo.png'
import gpsLogo from '../utils/assets/gpsLogo.png'
import phoneLogo from '../utils/assets/phoneLogo.png'
import {
  Container,
  Grid,
  SocialMedia,
  Organization,
  Logo,
  Name,
  Href,
  Instagram,
  Facebook,
  LinkedIn,
  OrganizationData,
  Separator,
  Location,
  Adress,
  Phone
} from './styles'

const UrlLogo = ({ href, logo }) => {
  return (
    <Href href={href}>
      <img src={logo} style={{ width: '50%' }} />
    </Href>
  )
}

export default function Footer ({ ongData }) {
  return (
    <Container>
      {ongData ? (
        <Grid>
          <SocialMedia>
            <Organization>
              <Logo>{ongData.imageUrl}</Logo>
              <Name>{ongData.name}</Name>
            </Organization>
            <Instagram>
              <UrlLogo href={ongData.urlInstagram} logo={instaLogo} />
            </Instagram>
            <Facebook>
              <UrlLogo href={ongData.urlFacebook} logo={faceLogo} />
            </Facebook>
            <LinkedIn>
              <UrlLogo href={ongData.urlLinkedin} logo={linkLogo} />
            </LinkedIn>
          </SocialMedia>
          <OrganizationData>
            <Separator />
            <Location>
              <Adress>
                <h4>{ongData.address}</h4>
              </Adress>
              <Phone>
                <h4>{ongData.phone}</h4>
              </Phone>
            </Location>
          </OrganizationData>
        </Grid>
      ) : (
        <Name>Loading...</Name>
      )}
    </Container>
  )
}
