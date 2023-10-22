# Simple login page with NextAuth and 

## Using 
  - next-auth: 4.x
  - next-intl: 3.x

## To run

To give it a try, simply visit https://next-auth-login-form.vercel.app/

To run locally, you have to create an `.env.local` file at the root of the project with NextAuth configuration:

    # next-auth
    NEXTAUTH_SECRET="<put your secret here>"
    NEXTAUTH_URL="http://localhost:3000"


To simply generate a secret, you can run:

    node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"

Then

    npm install
    npm run dev

Then go to http://localhost:3000 and follow the steps.

* Username is up to you
* Password is `pass`

## Notes

  - Only French and English are implemented in this proof of concept.
  - The actual lookup in the database is mocked,
  - However we use JWT to avoid a (mocked) database lookup on each page reload
