# Callum's Form Creator

Run with npm start or go to https://callums-form-creator.netlify.app/

## Description

This is a form creator akin to Google Forms. You can add or remove
fields with the left hand side, and the right hand side will automatically 
show you a preview of the form which you have created

The app should be fully mobile friendly and accessible (although
I doubt the colour scheme has enough contrast to be completely accessible).

## Comments

I initially wanted to use a framework such as Next.js or Remix, but I then I thought that
if my app isn't going to have routes or talk to a backend/database, it might be easier to
use Create React App. This turned out very well in my opinion, as it simplified my codebase
and it was very easy to use react-testing-library for integration tests.

Using React Testing Library rather than Cypress for integration tests was nice because it ensures
that elements are accessible.

I have decided to go with mostly integration tests in App.test.tsx because I think that
integration tests are more resilient to change. This worked out very well because I actually
misread the brief at first and didn't realise that the preview had to be on the same page as
the form creation. I initially had them on two separate routes, which you could switch between
with a toggle. When I realised my mistake, it was actually very easy to refactor my code to
put them on the same page - it only took about 5 minutes.

I'm quite happy with how this project turned out, although my decision to use
React Final Form has complicated a lot of the jsx. It's a powerful library,
and the form library which I am most familiar with, but it adds a lot of difficult
to read syntax.

I also should have installed a more strict linter when I started, as the ordering of my
props are a bit of a mess, and I have semi-colons everywhere (I am used to putting these
in as my linter at work requires them)

## What I would do with more time

I would add the ability to inset form fields above and below existing ones,
rather than forcing the user to remove all fields in front of the position where
they want to add a field.

I would also make sure that if the user selects "checkbox" as the input type,
that they have to input some options before the preview is rendered.

I would also add more input types such as select, radio buttons (multiple choice)
date input etc.

The field components in create-field share a lot of logic, so maybe I could refactor
that shared logic out to get rid of repetition.
