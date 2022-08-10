import React from 'react'
import styled from '@emotion/styled'
import { NextPage } from 'next'
import { useRouter } from 'next/router'
import { css } from '@emotion/react'

// Components
import { Button } from '@components/Button'
import { Input } from '@components/Input'
import { Typography } from '@components/Typography'

// Services
import LoginAPI from '@services/login'

// Hookes
import { useNotification } from 'hooks'

const Login: NextPage = () => {
  const router = useRouter()
  const { addNotification } = useNotification()

  const [data, setData] = React.useState({
    user: '',
    password: '',
  })
  const [error, setError] = React.useState({
    user: false,
    password: false,
  })

  const handleLogin = async () => {
    const errors = {
      user: !data.user,
      password: !data.password,
    }

    const hasError = Object.values(errors).includes(true)

    if (hasError) {
      setError(errors)
      return
    }

    try {
      const response = await LoginAPI.login({
        login: data.user,
        senha: data.password,
      })

      if (response) {
        router.push('/')
      } else {
        throw new Error('Credenciais inválidas')
      }
    } catch (_) {
      addNotification({
        variant: 'error',
        title: 'Oops!',
        description: 'Credenciais inválidas.',
      })
    }
  }

  const handleInputChange = (type: 'user' | 'password', value: string) => {
    setError(prev => ({ ...prev, [type]: value === '' }))
    setData(prev => ({ ...prev, [type]: value }))
  }

  return (
    <Root>
      <div className="image-wrapper">
        <img
          src="https://lc-public-assets.s3.sa-east-1.amazonaws.com/images/Header/letsCodeLogo.svg"
          alt="Let's Code Logo"
        />
      </div>

      <div className="form-wrapper">
        <div className="content">
          <Typography variant="h3" tag="h1">
            Bem-vindo de volta
          </Typography>

          <Typography tag="p">Por favor, insira suas credenciais.</Typography>

          <div className="form-content">
            <Input
              fullWidth
              label="Usuário"
              value={data.user}
              onChange={e => handleInputChange('user', e.target.value)}
              error={error.user}
              helperText={error.user ? 'Campo obrigatório' : ''}
              onBlur={e => setError({ ...error, user: !e.target.value })}
            />
            <Input
              fullWidth
              label="Senha"
              type="password"
              value={data.password}
              onChange={e => handleInputChange('password', e.target.value)}
              error={error.password}
              helperText={error.password ? 'Campo obrigatório' : ''}
              onBlur={e => setError({ ...error, password: !e.target.value })}
            />

            <Button fullWidth onClick={handleLogin}>
              Entrar
            </Button>
          </div>
        </div>
      </div>
    </Root>
  )
}

export default Login

const Root = styled.div(
  ({ theme }) => css`
    display: flex;
    flex-direction: column;
    height: 100vh;

    @media (min-width: ${theme.breakpoints.md}px) {
      flex-direction: row;

      > div {
        flex: 1;
      }
    }

    .form-wrapper {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      height: 100vh;

      .content {
        padding: ${theme.spacing[3]}px ${theme.spacing[7]}px;
        max-width: 500px;
      }

      .form-content {
        display: flex;
        flex-direction: column;
        gap: ${theme.spacing[4]}px;
        margin-top: ${theme.spacing[5]}px;
      }
    }

    .image-wrapper {
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;
      overflow: hidden;
      background: url(https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80);
      background-size: cover;
      background-position: center center;
      height: 200px;

      @media (min-width: ${theme.breakpoints.md}px) {
        height: unset;
      }

      &:before {
        content: ' ';
        position: absolute;
        background: rgba(0, 0, 0, 0.8);
        inset: 0;
        backdrop-filter: blur(10px);
      }

      img {
        position: relative;
        z-index: 2;
        user-select: none;
      }
    }
  `,
)
