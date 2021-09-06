import React from 'react';

import {
  ImInstagram,
  ImYoutube2,
  ImFacebook,
  ImTwitter,
  ImRss
} from 'react-icons/im';
import {
  Container,
  NewsletterContent,
  Content,
  Contact,
  ContactTitle,
  Numbers,
  Links,
  Subfooter,
  SubfooterLinks,
  Certicates
} from './styles';

export function Footer() {
  return (
    <Container>
      <Content>
        <NewsletterContent>
          <h4>NEWSLETTER</h4>

          <div>
            <input
              type="email"
              autoCapitalize="off"
              autoCorrect="off"
              spellCheck="false"
              name="email"
              id="newsletter"
              title="Assine nossa newsletter"
              className="input-text required-entry validate-email"
            />

            <button type="submit">ASSINAR</button>
          </div>
        </NewsletterContent>

        <Contact>
          <ContactTitle>CONTATO:</ContactTitle>
          <Numbers>
            <div>
              <p>
                SÃO PAULO <span>(11) 4063-5511</span>
              </p>

              <p>
                RIO DE JANEIRO <span>(21) 4063-7575</span>
              </p>

              <p>
                BELO HORIZONTE <span>(31) 4063-9533</span>
              </p>
            </div>

            <div>
              <p>
                BRASILIA <span>(61) 4063-8266</span>
              </p>

              <p>
                SALVADOR <span>(71) 4062-9296</span>
              </p>

              <p>
                CURITIBA <span>(41) 4063-5511</span>
              </p>
            </div>
          </Numbers>
          <Links>
            <div>
              <a
                href="https://twitter.com/lojamadrugao"
                target="_blank"
                rel="noreferrer"
              >
                <ImInstagram size={25} />
              </a>
            </div>
            <div>
              <a
                href="https://www.youtube.com/c/MadrugaoSuplementosAlimentares"
                target="_blank"
                rel="noreferrer"
              >
                <ImYoutube2 size={25} />
              </a>
            </div>
            <div>
              <a
                href="https://www.facebook.com/madrugaosuplementos/"
                target="_blank"
                rel="noreferrer"
              >
                <ImFacebook size={25} />
              </a>
            </div>

            <div>
              <a
                href="https://twitter.com/lojamadrugao"
                target="_blank"
                rel="noreferrer"
              >
                <ImTwitter size={25} />
              </a>
            </div>

            <div>
              <a
                href="https://www.madrugaosuplementos.com.br/blog/"
                target="_blank"
                rel="noreferrer"
              >
                <ImRss size={25} />
              </a>
            </div>
          </Links>
        </Contact>
      </Content>
      <Subfooter>
        <SubfooterLinks>
          <div className="block-title">
            <strong>
              <span>mais vendidos</span>
            </strong>
          </div>
          <ul>
            <li>
              <a href="https://www.madrugaosuplementos.com.br/suplementos/100-pure-whey/">
                100% Pure Whey
              </a>
            </li>
            <li>
              <a href="https://www.madrugaosuplementos.com.br/suplementos/100-whey-protein-optimum-nutrition/">
                100% Whey Protein
              </a>
            </li>
            <li>
              <a href="https://www.madrugaosuplementos.com.br/massa-muscular/albumina/">
                Albumina
              </a>
            </li>
            <li>
              <a href="https://www.madrugaosuplementos.com.br/emagrecimento/chas/">
                Chá de Emagrecimento
              </a>
            </li>
            <li>
              <a href="https://www.madrugaosuplementos.com.br/massa-muscular/">
                Massa muscular
              </a>
            </li>
            <li>
              <a href="https://www.madrugaosuplementos.com.br/saude/quitosana/">
                Quitosana
              </a>
            </li>
            <li>
              <a href="https://www.madrugaosuplementos.com.br/emagrecimento/shakes/">
                Shakes emagrecedores
              </a>
            </li>
            <li>
              <a href="https://www.madrugaosuplementos.com.br/emagrecimento/substituto-de-refeicao/">
                Substituto da refeição
              </a>
            </li>
            <li>
              <a href="https://www.madrugaosuplementos.com.br/suplementos/importados/">
                Suplementos importados
              </a>
            </li>
            <li>
              <a href="https://www.madrugaosuplementos.com.br/suplementos/nacionais/">
                Suplementos nacionais
              </a>
            </li>
          </ul>
          <ul>
            <li>
              <a href="https://www.madrugaosuplementos.com.br/saude/omega/">
                Ômega 3
              </a>
            </li>
            <li>
              <a href="https://www.madrugaosuplementos.com.br/emagrecimento/colageno/">
                Colágeno
              </a>
            </li>
            <li>
              <a href="https://www.madrugaosuplementos.com.br/massa-muscular/whey-protein/optimum/">
                Whey Protein Optimum
              </a>
            </li>
            <li>
              <a href="https://www.madrugaosuplementos.com.br/massa-muscular/whey-protein/probiotica/">
                Whey protein probiótica
              </a>
            </li>
            <li>
              <a href="https://www.madrugaosuplementos.com.br/3-whey-protein-2000g-probiotica/">
                3 Whey Protein
              </a>
            </li>
            <li>
              <a href="https://www.madrugaosuplementos.com.br/5w-dynomite-effect-2400g-body-action/">
                5W DyNOmite Effect
              </a>
            </li>
            <li>
              <a href="https://www.madrugaosuplementos.com.br/massa-muscular/hmb/">
                HMB
              </a>
            </li>
            <li>
              <a href="https://www.madrugaosuplementos.com.br/iso-pro-whey-2000g-probiotica/">
                Isopro Whey
              </a>
            </li>
            <li>
              <a href="https://www.madrugaosuplementos.com.br/kits-promocionais/suplementos-para-ganhar-massa-muscular/">
                Kit massa muscular
              </a>
            </li>
            <li>
              <a href="https://www.madrugaosuplementos.com.br/nutrex-6-120caps-nutrex/">
                Lipo 6
              </a>
            </li>
          </ul>
          <ul>
            <li>
              <a href="https://www.madrugaosuplementos.com.br/platinum-hydro-whey-1-590g-optimum-nutrition/">
                Platinum Hydro Whey
              </a>
            </li>
            <li>
              <a href="https://www.madrugaosuplementos.com.br/massa-3200-3000g-probiotica-5137/">
                Massa 3200
              </a>
            </li>
            <li>
              <a href="https://www.madrugaosuplementos.com.br/massa-muscular/">
                Massa muscular
              </a>
            </li>
            <li>
              <a href="https://www.madrugaosuplementos.com.br/massa-muscular/proteina-de-soja/">
                Proteína de soja
              </a>
            </li>
            <li>
              <a href="https://www.madrugaosuplementos.com.br/suplementos/syntha-6/">
                Syntha 6
              </a>
            </li>
            <li>
              <a href="https://www.madrugaosuplementos.com.br/ultimate-5-whey-protein-900g-probiotica/">
                Ultimate 5 Whey Protein
              </a>
            </li>
            <li>
              <a href="https://www.madrugaosuplementos.com.br/whey-3w-nitro2-900g-milly/">
                Whey 3W NitrO2
              </a>
            </li>
            <li>
              <a href="https://www.madrugaosuplementos.com.br/whey-bar-24un-probiotica/">
                Whey Bar
              </a>
            </li>
            <li>
              <a href="https://www.madrugaosuplementos.com.br/suplementos/carnivor-musclemeds/">
                Carnivor
              </a>
            </li>
          </ul>
        </SubfooterLinks>
        <SubfooterLinks>
          <div className="block-title">
            <strong>
              <span>mais buscados</span>
            </strong>
          </div>
          <ul>
            <li>
              <a href="https://www.madrugaosuplementos.com.br/animal-pak-30-packs-universal-nutrition/">
                Animal Pack
              </a>
            </li>
            <li>
              <a href="https://www.madrugaosuplementos.com.br/massa-muscular/caseina/">
                Caseína
              </a>
            </li>
            <li>
              <a href="https://www.madrugaosuplementos.com.br/massa-muscular/creatina/dymatize/">
                Creatina Dymatize
              </a>
            </li>
            <li>
              <a href="https://www.madrugaosuplementos.com.br/massa-muscular/creatina/muscle_pharm/">
                Creatina Muscle Pharm{' '}
              </a>
            </li>
            <li>
              <a href="https://www.madrugaosuplementos.com.br/massa-muscular/creatina/pura/">
                Creatina Pura
              </a>
            </li>
            <li>
              <a href="https://www.madrugaosuplementos.com.br/massa-muscular/glutamina/">
                Glutamina
              </a>
            </li>
            <li>
              <a href="https://www.madrugaosuplementos.com.br/massa-muscular/hipercaloricos-massa/">
                Hipercalorico
              </a>
            </li>
            <li>
              <a href="https://www.madrugaosuplementos.com.br/suplementos/mega-pack/">
                Mega Pack
              </a>
            </li>
            <li>
              <a href="https://www.madrugaosuplementos.com.br/massa-muscular/whey-protein/feminino/">
                Whey Protein Feminino
              </a>
            </li>
          </ul>
          <ul>
            <li>
              <a href="https://www.madrugaosuplementos.com.br/kits-promocionais/ganhar_peso/">
                Suplementos para engordar
              </a>
            </li>
            <li>
              <a href="https://www.madrugaosuplementos.com.br/kits-promocionais/suplementos-para-definir/">
                Suplementos para definir
              </a>
            </li>
            <li>
              <a href="https://www.madrugaosuplementos.com.br/definicao_muscular/">
                Suplementos para ganhar massa muscular
              </a>
            </li>
            <li>
              <a href="https://www.madrugaosuplementos.com.br/emagrecer/">
                Suplementos para queimar gordura
              </a>
            </li>
            <li>
              <a href="https://www.madrugaosuplementos.com.br/emagrecer/">
                Suplementos para emagracer
              </a>
            </li>
            <li>
              <a href="https://www.madrugaosuplementos.com.br/emagrecimento/termogenicos/">
                Termogênico
              </a>
            </li>
            <li>
              <a href="https://www.madrugaosuplementos.com.br/suplementos/therma-pro/">
                Therma Pro
              </a>
            </li>
            <li>
              <a href="https://www.madrugaosuplementos.com.br/black-friday-suplemento/">
                Black Friday Suplementos
              </a>
            </li>
            <li>
              <a href="https://www.madrugaosuplementos.com.br/cupom-desconto-madrugao-suplementos/">
                Cupom Desconto Madrugão Suplementos
              </a>
            </li>
          </ul>
        </SubfooterLinks>
        <SubfooterLinks>
          <div className="block-title">
            <strong>
              <span>Institucional</span>
            </strong>
          </div>
          <ul>
            <li>
              <a
                href="https://www.madrugaosuplementos.com.br/a-empresa/"
                rel="nofollow"
              >
                A empresa
              </a>
            </li>
            <li>
              <a
                href="https://www.madrugaosuplementos.com.br/por-que-madrugao/"
                rel="nofollow"
              >
                Por que "Madrugão"?
              </a>
            </li>
            <li>
              <a
                href="https://www.madrugaosuplementos.com.br/seguranca/"
                rel="nofollow"
              >
                Segurança
              </a>
            </li>
          </ul>
        </SubfooterLinks>
        <SubfooterLinks>
          <div className="block-title">
            <strong>
              <span>Ajuda e Suporte</span>
            </strong>
          </div>
          <ul>
            <li>
              <a
                href="https://www.madrugaosuplementos.com.br/como-comprar/"
                rel="nofollow"
              >
                Como Comprar
              </a>
            </li>
            <li>
              <a
                href="https://www.madrugaosuplementos.com.br/entregas/"
                rel="nofollow"
              >
                Entregas
              </a>
            </li>
            <li>
              <a
                href="https://www.madrugaosuplementos.com.br/pagamentos/"
                rel="nofollow"
              >
                Pagamentos
              </a>
            </li>
            <li>
              <a
                href="https://www.madrugaosuplementos.com.br/trocas-e-devolucoes/"
                rel="nofollow"
              >
                Trocas e Devoluções
              </a>
            </li>
            <li>
              <a href="https://www.madrugaosuplementos.com.br/glossario-suplementos/">
                Glossário Suplementos
              </a>
            </li>
            <li>
              <a
                href="https://www.madrugaosuplementos.com.br/contacts/"
                rel="nofollow"
              >
                Fale Conosco
              </a>
            </li>
          </ul>
        </SubfooterLinks>
      </Subfooter>
      <Certicates>
        <ul>
          <li>
            <a
              href="http://www.ebit.com.br/madrugao-suplementos"
              target="_blank"
              rel="noreferrer"
            >
              <img
                alt="Médicos Sem Fronteiras"
                src="//www.madrugaosuplementos.com.br/skin/frontend/madrugao/default/images/md-store-Ouro.png"
              />
            </a>
          </li>
          <li>
            <a>
              <img
                alt="Melhor Site Suplementos 2015"
                src="//www.madrugaosuplementos.com.br/skin/frontend/madrugao/default/images/premio-2015_2016-100px.png"
              />
            </a>
          </li>
          <li>
            <a>
              <img
                alt="Médicos Sem Fronteiras"
                src="//www.madrugaosuplementos.com.br/skin/frontend/madrugao/default/images/selo-medicos-100px.png"
              />
            </a>
          </li>
          <li>
            <a
              href="https://transparencyreport.google.com/safe-browsing/search?url=http:%2F%2Fwww.madrugaosuplementos.com.br%2F"
              target="_blank"
              rel="noreferrer"
            >
              <img
                alt="Médicos Sem Fronteiras"
                src="//www.madrugaosuplementos.com.br/skin/frontend/madrugao/default/images/google.jpg"
              />
            </a>
          </li>
        </ul>
      </Certicates>
    </Container>
  );
}
