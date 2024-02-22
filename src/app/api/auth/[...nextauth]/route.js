import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google";
import { Account, User as AuthUser } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import User from "@/models/userModel";
import connect from "@/utils/db";
import bcrypt from 'bcryptjs';

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    CredentialsProvider({
        id:'credentials',
        name: 'Credentials',
        credentials:{
            email:{label: 'Email', type:'text'},
            password:{label: 'Password', type:'password'},
        },
        async authorize(credentials){
            await connect();
            try{
                const user = await User.findOne({email: credentials.email});
                if(user){
                    const isPasswordCorrect = await bcrypt.compare(credentials.password, user.password);
                    
                    if(isPasswordCorrect){
                        return user;
                    }
                }
                
                throw new Error ('Invalid user or pass');
            }catch(err){
                throw new Error (err);
            }
        }
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET
    })
    // ...add more providers here
  ]

}

export const handler = NextAuth(authOptions);
export {handler as GET, handler as POST}
