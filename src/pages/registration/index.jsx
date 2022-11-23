import React from 'react'
import { MdEmail, MdLock,MdPerson } from 'react-icons/md'
import { Header } from '../../components/Header';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';

import { useForm } from "react-hook-form";

import {Container, Title, Column, TitleLogin, SubtitleLogin, CriarText, Row, Wrapper} from './styles'

const Registration = () => {
  const { control, formState: { errors  } } = useForm({
    reValidateMode: 'onChange',
    mode: 'onChange',
});

  /*const onSubmit = async (formData) => {
    console.log("rodou")
};*/

  return (<>
        <Header/>
        <Container>
          <Column>
            <Title>A plataforma para você aprender com experts, dominar as principais tecnologias e 
              entrar mais rápido nas empresas mais desejadas.</Title>
          </Column>
          <Column>
                <Wrapper>
                <TitleLogin>Comece agora grátis</TitleLogin>
                <SubtitleLogin>Crie sua conta e make the change.</SubtitleLogin>
                <form>
                    <Input placeholder="Nome" leftIcon={<MdPerson />} name="nome" control={control}/>
                    {errors.nome && <span>Nome é obrigatório</span>}
                    <Input placeholder="E-mail" leftIcon={<MdEmail />} name="email" control={control}/>
                    {errors.email && <span>E-mail é obrigatório</span>}
                    <Input type="password" placeholder="Senha" leftIcon={<MdLock />}  name="senha" control={control}/>
                    {errors.senha && <span>Senha é obrigatório</span>}
                    <Button title="Criar Minha Conta" variant="secondary"/>
                </form>
                <Row>
                  <CriarText>Ao clicar em "criar minha conta grátis", declaro que aceito as Políticas de Privacidade e os Termos de Uso da DIO</CriarText>
                </Row>
                <Row>
                  <CriarText>Já tenho uma Conta <strong>Fazer login</strong></CriarText>
                </Row>
                </Wrapper>
            </Column>
        </Container>
    </>
  )
}

export {Registration};