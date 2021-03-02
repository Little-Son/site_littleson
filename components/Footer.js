import { format } from 'date-fns'

export default function SiteFooter() {
    const currentAge = format(new Date(), 'yyyy')
    
    return(
        <footer className="w-full mt-20">
            <div className="px-6 lg:px-20 py-10 flex flex-row justify-between items-center border-t-thin border-gray-100">
                <div><strong>Little Son</strong> - {currentAge} &copy; Todos os direitos reservados</div>
                <div>Feito com ❤ para você.</div>
            </div>
        </footer>
    )
}