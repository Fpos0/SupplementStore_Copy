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
  Links
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
          </div>
          <button type="submit">ASSINAR</button>
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
    </Container>
  );
}
