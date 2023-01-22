# Bug Report

Bug report for 3 critical bugs in the application

## 1 - Viewing any popular model will 

Expected: 
User can view the selected car model and all details are displayed correctly

Bug: 
Page is stuck in constant loading state and user is unable to view selected model. 

Steps: 
1. Go to landing page
2. Select "Popular Model" option
3. BUG: loading state is displayed

More Info:
The loading error is very likely due to the a CORs error for /prod/models/{modelno.} endpoint


## 2 - Car make page - Clicking the Buggy Rating header logo in top left will not redirect user to home page

Expected: 
When user clicks the Buggy Rating header logo in top left, they will be redirected to the home page

Bug: 
While on the Car Make page, when the user clicks the Buggy Rating header logo in top left user is NOT redirected back to home page.

Steps: 
1. Go to landing page
2. Select "Popular Make" option
3. Click on Buggy Rating header logo on top left
4. BUG: Nothing happens

More Info:
The loading error is due to a broken/incorrect href. 


## 3 - Overall rating page - Table column sorting is broken

Expected: 
Table will be sorted by the selected column in ASC order (first click) and the DESC order (second click) etc.

Bug: 
1. Table sorting only works on the first click. It will not sort a second time unless a different column is selected.
2. Selected column sorting is incosistent. Some will be ASC (make, model, engine), others are broken (rank) or DESC (votes)

Steps: 
1. Go to landing page
2. Select "Overall Rating" option
3. Click a column header to sort
4. BUG:

More Info:
The table is not optimised and is not consistent