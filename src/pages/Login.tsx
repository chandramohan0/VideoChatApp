import { EuiButton, EuiFlexGroup, EuiFlexItem, EuiImage, EuiProvider, EuiSpacer, EuiText, EuiTextColor, EuiPanel } from '@elastic/eui';
import React from 'react';
import animation from '../assets/animation.gif';
import logo from '../assets/logo.png';

function Login() {
  return (
    <EuiProvider colorMode='dark'>
      <EuiFlexGroup alignItems='center' justifyContent='center' style={{width:'100vw', height:'100vh'}}>
        <EuiFlexItem grow={false}>
          <EuiPanel paddingSize='xl'>
            <EuiFlexGroup justifyContent='center' alignItems='center'>
              <EuiFlexItem>
                <EuiImage src={animation} alt='logo'></EuiImage>
              </EuiFlexItem>
              <EuiFlexItem>
                <EuiImage src={logo} alt='logo' size='230px' />
                <EuiSpacer size='xs' />
                <EuiText textAlign='center' grow={false}>
                  <h3>
                    <EuiTextColor>One Platform to</EuiTextColor>
                    <EuiTextColor color="#0b5cff"> connect</EuiTextColor>
                  </h3>
                </EuiText>
                  <EuiSpacer size='m' />
                  <EuiButton fill>Login with Google</EuiButton>
                </EuiFlexItem>
            </EuiFlexGroup>
          </EuiPanel>
        </EuiFlexItem>
      </EuiFlexGroup>
    </EuiProvider>
  )
}

export default Login
