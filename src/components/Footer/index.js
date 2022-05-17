import React from 'react'
import { useSelector } from 'react-redux'

import instaLogo from 'components/utils/assets/instaLogo.png'
import faceLogo from 'components/utils/assets/faceLogo.png'
import linkLogo from 'components/utils/assets/linkLogo.png'
import gpsLogo from 'components/utils/assets/gpsLogo.png'
import phoneLogo from 'components/utils/assets/phoneLogo.png'
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
import Loader from 'components/utils/Loader'

const UrlLogo = ({ href, logo }) => {
  return (
    <Href href={href}>
      <img src={logo} style={{ width: '50%' }} />
    </Href>
  )
}

export default function Footer () {
  const { list: organization } = useSelector(state => state.organization)

  return (
    <Container>
      {organization ? (
        <Grid>
          <SocialMedia>
            <Organization>
              <Name>{organization.name}</Name>
            </Organization>
            <Instagram>
              <UrlLogo href={organization.urlInstagram} logo={instaLogo} />
            </Instagram>
            <Facebook>
              <UrlLogo href={organization.urlFacebook} logo={faceLogo} />
            </Facebook>
            <LinkedIn>
              <UrlLogo href={organization.urlLinkedin} logo={linkLogo} />
            </LinkedIn>
          </SocialMedia>
          <OrganizationData>
              <Adress>
                <h4>{organization.address}</h4>
              </Adress>
              <Phone>
                <h4>{organization.phone}</h4>
              </Phone>
          </OrganizationData>
        </Grid>
      ) : (
        <Loader />
      )}
    </Container>
  )
}
