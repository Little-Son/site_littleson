export default function NewsletterBox() {
    return(
        <div className="min-h-40 px-4 py-6 border-thin border-gray-100 bg-gray-50 rounded mb-20 col-span-2 flex flex-col md:flex-row">
            <div className="w-full md:w-2/5 h-full p-6 text-center md:text-left flex flex-col items-center justify-center">
                <p className="w-full mb-2 text-2xl font-bold">📮 LittleNews</p>
                <p className="w-full text-base">Atualizações e conteúdos exclusivos, toda sexta-feira, em seu e-mail.</p>
            </div>
            
            <div className="w-full md:w-3/5 h-full p-6 flex flex-col items-center justify-center">
                <form className="w-full flex flex-col" action="https://www.getrevue.co/profile/littleson/add_subscriber" method="post" id="revue-form" name="revue-form"  target="_blank">
                    <div className="w-full lg:grid lg:grid-cols-2 md:gap-2">
                        <input type="text" className="w-full rounded mb-4" placeholder="Nome" name="member[first_name]" id="member_first_name" required/>
                        <input type="text" className="w-full rounded mb-4" placeholder="Sobrenome" name="member[last_name]" id="member_last_name" required/>
                    </div>
                    <input className="w-full rounded mb-4" type="email" placeholder="Seu e-mail" name="member[email]" id="member_email" required/>
                    <button className="w-full text-white rounded py-2 bg-blue-500 pointer" type="submit" name="member[subscribe]" id="member_submit">Assinar</button>
                </form>
            </div>
        </div>
    )
}