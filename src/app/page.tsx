"use client";

import Image from 'next/image'
import styles from './page.module.css'
import { Accordion, AccordionDetails, AccordionSummary, AppBar, Button, Collapse, Grid2, List, ListItemButton, ListItemIcon, ListItemText, ListSubheader, Paper, Toolbar, Typography } from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import SendIcon from '@mui/icons-material/Send';
import Extension from '@mui/icons-material/Extension';
import Storage from '@mui/icons-material/Storage';
import Language from '@mui/icons-material/Language';
import Circle from '@mui/icons-material/Circle';
import { useState } from 'react';
import informacoes from './data';

export default function Home() {
  const [open, setOpen] = useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <Grid2 container size={12}>
      <AppBar position="static" style={{ backgroundColor: '#090f13' }}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Meu Portfólio
          </Typography>

          <Button color="inherit">
            HOME
          </Button>
        </Toolbar>
      </AppBar>
      <Grid2 container size={12} bgcolor={'#171f25'}>
        <Grid2 size={{ xs:12, md: 6 }} className={styles.gridTextoFoto}>
          <div >
            <h1 style={{color: 'white'}}>
              <strong>Caio Rebert</strong><br></br>
            </h1>
            <h2 style={{color: 'white', marginTop: 10}}>
              <small>Desenvolvedor Full Stack</small>
            </h2>
            <h2>
              <small>24 anos</small>
            </h2>
          </div>
        </Grid2>
        <Grid2 size={{ xs:12, md: 1}} className={styles.gridTextoFoto}>
          
        </Grid2>
        <Grid2 size={{ xs:12, md: 3 }} className={styles.gridFoto}>
          <img
            style={{borderRadius: 20, margin: 'auto', position: 'relative', display: 'block'}}
            src="/fotos/perfil.png"
            alt="Perfil"
            width={'100%'}/>
        </Grid2>
      </Grid2>
      <br></br>
      <Grid2 size={12} bgcolor={'#090f13'} color={'white'}>
        <Grid2 container size={12} marginTop={5}>
          <Grid2 size={12} paddingTop={2} paddingBottom={2} textAlign={'center'} bgcolor={'#171f25'}>
            <Typography variant='h4'>Experiências Profissionais</Typography>
          </Grid2>
          <Grid2 container size={12} spacing={2} paddingTop={5} paddingBottom={5}>
            {
              informacoes.experiencias.map((experiencia, index) => (
                <Grid2 key={index} size={{ xs: 12, md: 4 }} padding={1}>
                  <Accordion
                    style={{
                      backgroundColor: '#506ee5',
                      border: '3px solid #506ee5',
                      color: 'white'
                    }}>
                    <AccordionSummary
                      style={{ fontSize: 20 }}
                      aria-controls={`panel${index}-content`}
                      id={`panel${index}-header`}
                      expandIcon={<ExpandMoreIcon style={{ color: 'white' }} />}
                    >
                      <table>
                        <tbody>
                          <tr>
                            <td colSpan={2}>
                              <h4>{experiencia.cargo} | {experiencia.empresa}</h4>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <small>Início: {experiencia.inicio}</small>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <small>Fim: {experiencia.fim}</small>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </AccordionSummary>
                    <AccordionDetails style={{ padding: 10, borderTop: '1px solid white' }}>
                      <List sx={{ width: '100%', maxWidth: 360 }} component="nav">
                        <ListItemButton>
                          <ListItemIcon>
                            <Language style={{color:'white'}} />
                          </ListItemIcon>
                          <ListItemText primary="Linguagens de programação" />
                        </ListItemButton>
                        <List component="div" disablePadding>
                          {experiencia.linguagens.map((linguagem, idx) => (
                            <ListItemButton key={idx} sx={{ pl: 4 }}>
                              <ListItemIcon>
                                <Circle style={{ color: 'white', fontSize: 10 }} />
                              </ListItemIcon>
                              <ListItemText primary={linguagem} />
                            </ListItemButton>
                          ))}
                        </List>
                        <ListItemButton>
                          <ListItemIcon>
                            <Extension style={{color:'white'}}/>
                          </ListItemIcon>
                          <ListItemText primary="Frameworks" />
                        </ListItemButton>
                        <List component="div" disablePadding>
                          {experiencia.frameworks.map((framework, idx) => (
                            <ListItemButton key={idx} sx={{ pl: 4 }}>
                              <ListItemIcon>
                                <Circle style={{ color: 'white', fontSize: 10 }} />
                              </ListItemIcon>
                              <ListItemText primary={framework} />
                            </ListItemButton>
                          ))}
                        </List>
                        <ListItemButton>
                          <ListItemIcon>
                            <Storage style={{color: 'white'}} />
                          </ListItemIcon>
                          <ListItemText primary="Bancos de dados" />
                        </ListItemButton>
                        <List component="div" disablePadding>
                          {experiencia.bancos.map((banco, idx) => (
                            <ListItemButton key={idx} sx={{ pl: 4 }}>
                              <ListItemIcon>
                                <Circle style={{ color: 'white', fontSize: 10 }} />
                              </ListItemIcon>
                              <ListItemText primary={banco} />
                            </ListItemButton>
                          ))}
                        </List>
                      </List>
                    </AccordionDetails>
                  </Accordion>
                </Grid2>
              ))
            }
          </Grid2>
        </Grid2>
        <Grid2 container size={12}>
          <Grid2 size={12} paddingTop={2} paddingBottom={2} textAlign={'center'} bgcolor={'#171f25'}>
            <Typography variant='h4'>Stacks conhecidas</Typography>
          </Grid2>
          <Grid2 container size={12} spacing={2} paddingTop={5} paddingBottom={5}>
            {
              informacoes.stacks.map((stack, index) => (
                <Grid2 key={index} size={{ xs: 12, md: 4 }} padding={1}>
                  <Accordion
                    style={{
                      backgroundColor: '#506ee5',
                      border: '3px solid #506ee5',
                      color: 'white'
                    }}>
                    <AccordionSummary
                      style={{ fontSize: 20 }}
                      aria-controls={`panel${index}-content`}
                      id={`panel${index}-header`}
                      expandIcon={<ExpandMoreIcon style={{ color: 'white' }} />}
                    >
                      <table>
                        <tbody>
                          <tr>
                            <td colSpan={2}>
                              <h4>{stack.nome}</h4>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <small>{stack.experiencia}</small>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </AccordionSummary>
                    <AccordionDetails style={{ padding: 10, borderTop: '1px solid white' }}>
                      <List sx={{ width: '100%', maxWidth: 360 }} component="nav">
                        <ListItemButton>
                          <ListItemIcon>
                            <Extension style={{color:'white'}} />
                          </ListItemIcon>
                          <ListItemText primary="Frameworks" />
                        </ListItemButton>
                        <List component="div" disablePadding>
                          {
                          (stack.frameworks === undefined) ? (
                            <ListItemButton sx={{ pl: 4 }}>
                              <ListItemIcon>
                                <Circle style={{ color: 'white', fontSize: 10 }} />
                              </ListItemIcon>
                              <ListItemText primary='Nenhum framework conhecido' />
                            </ListItemButton>
                          ) :
                          stack.frameworks.map((framework, idx) => (
                            <ListItemButton key={idx} sx={{ pl: 4 }}>
                              <ListItemIcon>
                                <Circle style={{ color: 'white', fontSize: 10 }} />
                              </ListItemIcon>
                              <ListItemText primary={framework} />
                            </ListItemButton>
                          ))}
                        </List>
                      </List>
                    </AccordionDetails>
                  </Accordion>
                </Grid2>
              ))
            }
          </Grid2>
        </Grid2>
        <Grid2 container size={12} color={'white'}>
          <Grid2 size={12} paddingTop={2} paddingBottom={2} textAlign={'center'} bgcolor={'#171f25'}>
            <Typography variant='h4'>Formações</Typography>
          </Grid2>
          <Grid2 container size={12} spacing={2}  paddingTop={5} paddingBottom={5}>
            {
              informacoes.formacoes.map((formacao, index) => (
                <Grid2 key={index} size={{ xs: 12, md: 4 }} padding={1}>
                  <Accordion
                    style={{
                      backgroundColor: '#506ee5',
                      border: '3px solid #506ee5',
                      color: 'white'
                    }}>
                    <AccordionSummary
                      style={{ fontSize: 20 }}
                      aria-controls={`panel${index}-content`}
                      id={`panel${index}-header`}
                      expandIcon={<ExpandMoreIcon style={{ color: 'white' }} />}
                    >
                      <table>
                        <tbody>
                          <tr>
                            <td colSpan={2}>
                              <h4>{formacao.curso} | {formacao.instituicao}</h4>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <small>Início: {formacao.inicio}</small>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <small>Fim: {formacao.fim}</small>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </AccordionSummary>
                    <AccordionDetails style={{ padding: 10, borderTop: '1px solid white' }}>
                      <List sx={{ width: '100%', maxWidth: 360 }} component="nav">
                        <ListItemButton>
                          <ListItemIcon>
                            <Language style={{color:'white'}} />
                          </ListItemIcon>
                          <ListItemText primary="Conteúdo" />
                        </ListItemButton>
                        <List component="div" disablePadding>
                          <ListItemButton sx={{ pl: 4 }}>
                            <ListItemIcon>
                              <Circle style={{ color: 'white', fontSize: 10 }} />
                            </ListItemIcon>
                            <ListItemText primary={formacao.conteudo} />
                          </ListItemButton>
                        </List>
                      </List>
                    </AccordionDetails>
                  </Accordion>
                </Grid2>
              ))
            }
          </Grid2>
        </Grid2>
        <Grid2 container size={12} color={'white'}>
          <Grid2 size={12} paddingTop={2} paddingBottom={2} textAlign={'center'} bgcolor={'#171f25'}>
            <Typography variant='h4'>Projetos pessoais</Typography>
          </Grid2>
          <Grid2 container size={12} spacing={2} paddingTop={5} paddingBottom={5} >
            {
              informacoes.projetos.map((projeto, index) => (
                <Grid2 key={index} size={{ xs: 12, md: 4 }} padding={1}>
                  <Accordion
                    style={{
                      backgroundColor: '#506ee5',
                      border: '3px solid #506ee5',
                      color: 'white'
                    }}>
                    <AccordionSummary
                      style={{ fontSize: 20 }}
                      aria-controls={`panel${index}-content`}
                      id={`panel${index}-header`}
                      expandIcon={<ExpandMoreIcon style={{ color: 'white' }} />}
                    >
                      <table>
                        <tbody>
                          <tr>
                            <td colSpan={2}>
                              <h4>{projeto.nome}</h4>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </AccordionSummary>
                    <AccordionDetails style={{ padding: 10, borderTop: '1px solid white' }}>
                      <List sx={{ width: '100%', maxWidth: 360 }} component="nav">
                        <ListItemButton>
                          <ListItemIcon>
                            <Language style={{color:'white'}} />
                          </ListItemIcon>
                          <ListItemText primary="Descrição" />
                        </ListItemButton>
                        <List component="div" disablePadding>
                          <ListItemButton sx={{ pl: 4 }}>
                            <ListItemIcon>
                              <Circle style={{color:'white', fontSize: 10}} />
                            </ListItemIcon>
                            <ListItemText primary={projeto.descricao} />
                          </ListItemButton>
                        </List>
                        <ListItemButton>
                          <ListItemIcon>
                            <Extension style={{color:'white'}} />
                          </ListItemIcon>
                          <ListItemText primary="Tecnologias utilizadas" />
                        </ListItemButton>
                        <List component="div" disablePadding>
                          {projeto.tecnologias.map((tecnologia, idx) => (
                            <ListItemButton key={idx} sx={{ pl: 4 }}>
                              <ListItemIcon>
                                <Circle style={{color:'white', fontSize: 10}} />
                              </ListItemIcon>
                              <ListItemText primary={tecnologia} />
                            </ListItemButton>
                          ))}
                        </List>
                        <ListItemButton>
                          <ListItemIcon>
                            <SendIcon style={{color:'white'}} />
                          </ListItemIcon>
                          <ListItemText primary="Link" />
                        </ListItemButton>
                        <List component="div" disablePadding>
                          {
                            projeto.link.map((link, idx) => (
                              <ListItemButton key={idx} sx={{ pl: 4 }}>
                                <ListItemIcon>
                                  <Circle style={{color:'white', fontSize: 10}} />
                                </ListItemIcon>
                                <ListItemText primary={<a href={link} target="_blank">Clique aqui</a>} />
                              </ListItemButton>
                            ))
                          }
                        </List> 
                      </List>
                    </AccordionDetails>
                  </Accordion>
                </Grid2>
              ))
            }
          </Grid2>
        </Grid2>
      </Grid2>
    </Grid2>
  )
}
