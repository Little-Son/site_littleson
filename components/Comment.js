import { FacebookProvider, Comments, CommentsCount } from 'react-facebook';
import {useSession} from 'next-auth/client'

export function Comment(props) {
  const [ session ] = useSession()
  const appID = "438630510651505"
  
  return(
    <section className="mt-28">
      {!session && (
        <div className="mb-28">
          <p class="text-2xl font-bold mb-2">O que você achou?</p>
          <p className="text-lg">Conta pra gente nos comentários 😊😉</p>
        </div>
      )}
      {session && (
        <div className="mb-20">
          <p class="text-2xl font-bold mb-2">Hey, {session.user.name}. O que você achou?</p>
          <p className="text-lg">Conta pra gente nos comentários 😊😉</p>
        </div>
      )}
      <FacebookProvider appId={appID}>
        <Comments href={`https://littleson.com.br/${props.href}`} width="100%" />
      </FacebookProvider>
    </section>
  )
}

export function CommentCounter(props) {
  return (
    <FacebookProvider appId={appID}>
      <CommentsCount href={`https://littleson.com.br/${props.href}`} />
    </FacebookProvider>
  )
}
