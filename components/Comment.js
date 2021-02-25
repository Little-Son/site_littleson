import { FacebookProvider, Comments, CommentsCount } from 'react-facebook';
const appID = "438630510651505"

export function Comment(props) {
  return(
    <FacebookProvider appId={appID}>
      <Comments href={`https://littleson.com.br/${props.href}`} width="100%" />
    </FacebookProvider>
  )
}

export function CommentCounter(props) {
  return (
    <FacebookProvider appId={appID}>
      <CommentsCount href={`https://littleson.com.br/${props.href}`} />
    </FacebookProvider>
  )
}
