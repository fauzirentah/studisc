import React from 'react'
import AnimationRevealPage from './helpers/AnimationRevealPage'
import { Container as ContainerBase } from './Layouts'
import tw from 'twin.macro'
import styled from 'styled-components'
import {css} from "styled-components/macro"; //eslint-disable-line
import illustration from './images/login-illustration.svg'
import logo from './images/logo.svg'
import { ReactComponent as LoginIcon } from 'feather-icons/dist/icons/log-in.svg'

const Container = tw(ContainerBase)`min-h-screen bg-purple-900 text-white font-medium flex justify-center -m-8`;
const Content = tw.div`max-w-screen-xl m-0 sm:mx-20 sm:my-16 bg-white text-gray-900 shadow sm:rounded-lg flex justify-center flex-1`;
const MainContainer = tw.div`lg:w-1/2 xl:w-5/12 p-6 sm:p-12`;
const LogoLink = tw.a``;
const LogoImage = tw.img`h-12 mx-auto`;
const MainContent = tw.div`mt-12 flex flex-col items-center`;
const Heading = tw.h1`text-2xl xl:text-3xl font-extrabold`;
const Heading3 = tw.h3`xl:text-xl`;
const FormContainer = tw.div`w-full flex-1 mt-8`;

const SocialButtonsContainer = tw.div`flex flex-col items-center`;
const gButtonContainer = tw.div`flex flex-col items-center`;
const SocialButton = styled.a`
  ${tw`w-full max-w-xs font-semibold rounded-lg py-3 border text-gray-900 bg-gray-100 hocus:bg-gray-200 hocus:border-gray-400 flex items-center justify-center transition-all duration-300 focus:outline-none text-sm mt-5 first:mt-0`}
  .iconContainer {
    ${tw`bg-white p-2 rounded-full`}
  }
  .icon {
    ${tw`w-4`}
  }
  .text {
    ${tw`ml-4`}
  }
`;

const IllustrationContainer = tw.div`sm:rounded-r-lg flex-1 bg-purple-100 text-center hidden lg:flex justify-center`;
const IllustrationImage = styled.div`
  ${props => `background-image: url("${props.imageSrc}");`}
  ${tw`m-12 xl:m-16 w-full max-w-sm bg-contain bg-center bg-no-repeat`}
`;

class LoginTW extends React.Component {
    componentDidMount() {
        window.gapi.load('signin2', () => {
            window.gapi.signin2.render('login-button', {
                'scope': 'profile email',
                'width': 240,
                'height': 50,
                'longtitle': true,
                'theme': 'dark'
              })
        })
    }

    

    render() {
        return (
        <AnimationRevealPage>
            <Container>
            <Content>
              <MainContainer>
                <LogoLink href="#">
                  <LogoImage src={logo} />
                </LogoLink>
                <MainContent>
                  <Heading>Sign In To AGrade</Heading>
                  <Heading3>Use your student's email</Heading3>
                  <FormContainer>
                    <SocialButtonsContainer>
                    <gButtonContainer id="login-button"></gButtonContainer>
                    </SocialButtonsContainer>
                  </FormContainer>
                </MainContent>
              </MainContainer>
              <IllustrationContainer>
                <IllustrationImage imageSrc={illustration} />
              </IllustrationContainer>
            </Content>
          </Container>
        </AnimationRevealPage>
                )
    }
}
export default LoginTW


  
  