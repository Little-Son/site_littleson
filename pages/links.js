import { LinkCard } from '../components/Card'
import SiteFooter from '../components/Footer'
import SiteHeader from '../components/Header'

export default function LinksPage() {
    return(
        <>
        <SiteHeader pageTitle="Little Son" pageLink="/">
            <span className="text-lg">Links</span>
        </SiteHeader>

        <main className="w-4/6 md:w-3/6 mx-auto mt-20 pt-10">
            <div className="w-full mb-20">
                <div className="w-full pb-6 border-b-thin border-gray-100 mb-10">
                    <h3 className="w-full text-2xl font-bold">Conteúdos</h3>
                    <p>Confira nossos conteúdos e materiais gratuitos para você.</p>
                </div>
                <div className="w-full md:grid grid-cols-2 gap-4">
                    <LinkCard icon="🗂" title="Biblioteca Little Son" excerpt="Baixe, gratuitamente, nossos wallpapers, desenhos para colorir, atividades e muito mais." slug="/biblioteca"/>

                    <LinkCard icon="📄" title="#LittleDevocional" excerpt="Devocionais diários do projeto Little Son." slug="/littledevocional/"/>

                    <LinkCard icon="📚" title="#LittleEstudos" excerpt="Estudos bíblicos para os pequenos conhecerem mais sobre a fé." slug="/littleestudos/"/>
                </div>
            </div>

            <div className="w-full my-20">
                <div className="w-full pb-6 border-b-thin border-gray-100 mb-10">
                    <h3 className="w-full text-2xl font-bold">Apoie</h3>
                    <p>Confira algumas maneiras de apoiar o projeto.</p>
                </div>
                <div className="w-full md:grid grid-cols-2 gap-4">
                    <LinkCard icon="🛍" title="LittleSTORE" excerpt="Compre em nossa loja oficial. Camisetas, pôsteres e muito mais com nossas artes exlusivas." slug="/loja"/>

                    <LinkCard icon="🛒" title="Amazon" excerpt="Faça suas compras na Amazon utilizando nosso link de afiliado." slug="https://www.amazon.com.br/?&_encoding=UTF8&tag=littleson-20&linkCode=ur2&linkId=6436fe63ac80e6d638b722b4af8fbb49&camp=1789&creative=9325"/>

                    <LinkCard icon="🤝🏻" title="Participe" excerpt="Curte o Little Son e gostaria de ajudar!? Então confira como você pode se envolver com o projeto." slug="/apoie"/>
                </div>
            </div>

            <div className="w-full my-20">
                <div className="w-full pb-6 border-b-thin border-gray-100 mb-10">
                    <h3 className="w-full text-2xl font-bold">Bastidores</h3>
                    <p>Conheça um pouco mais sobre o projeto Little Son.</p>
                </div>
                <div className="w-full md:grid grid-cols-2 gap-4">
                    <LinkCard icon="📋" title="Sobre 'a gente'" excerpt="Conheça nossa história, objetivos e em que acreditamos." slug="/sobre"/>

                    <LinkCard icon="⚖" title="Termos de Uso e Política de Privacidade" excerpt="Precisamos ser claros com você sobre como utilizamos seus dados de navegação e uso do Little Son." slug="/termos-privacidade"/>

                    <LinkCard icon="☎" title="Contato" excerpt="Tem alguma sugestão, ideia ou quer apenas dar um oi? Envie sua mensagem pra gente." slug="/contato"/>
                </div>
            </div>
        </main>
        <SiteFooter />
        </>
    )
}