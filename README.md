認証(Oauth)は clerk に全面的に任せている状態。（ブラックボックス状態 😢）

認可は clerk の認証済みユーザーの存在有無をチェックできる`auth`を使い、API リクエストのバリデーションを next.js の routehandler、または servercomponent で行う。
(auth が何をしているのか理解したい、おそらくセッション or トークンの確認)

auth  
https://clerk.com/docs/references/nextjs/auth

currentUser でも同じことができるが、auth は多機能
https://clerk.com/docs/references/nextjs/current-user

## 新規登録のフロー

1.clerk と Google or clerk と Github の oauth or email password  
2.認証成功後、clerk の webhook を使いコールバック処理  
3.コールバック処理で supabase にもユーザー情報を保存（この時のセキュリティは svix）
svix
https://docs.svix.com/receiving/verifying-payloads/how
