print("2+2-(5*5)")
sum_in_array = ["GOOGLE", "AMAZON", "CISCO"]

x,y,z = 23,2,4
print(x+y+z)
if (x>4):
    print("greater than")
else:
    print("less than")

#LIST IN PYTHON
companies_in_tech = ["GOOGLE","AMAZON","TESLA"]
#prints command
print(companies_in_tech[1]) #prints >> GOOGLE
print(companies_in_tech[-1]) #prints >> TESLA
print(companies_in_tech[-2]) #prints >> AMAZON

list_of_random_things = [1, 3.4, 'a string', True]
list_of_random_things[0] #prints 1

#However, you can retrieve the last element by reducing the index by 1.
#Therefore, you can do the following:
list_of_random_things[len(list_of_random_things) - 1]
#prints True

#SLICE AND DICE
list_of_random_things = [1, 3.4, 'a string', True]
list_of_random_things[1:2]
#prints >> [3.4]

list_of_random_things[:2]
#prints >> [1, 3.4]

list_of_random_things[1:]
# prints >> [3.4, 'a string', True]

#MEMBERSHIP OPERATOR: "in" or "not in"
greeting = "Hello there"
print("there" in greeting) # "in" checks if the object is included in "greeting"
#prints >> True

greeting = "Hello there"
print("love" not in greeting) # "not in" checks if the object is included in "greeting"
#prints >> True

'this' in 'this is a string'
#prints >> True
'in' in 'this is a string'
#prints >> True
'isa' in 'this is a string'
#prints >> False
5 not in [1, 2, 3, 4, 6]
#prints >> True
5 in [1, 2, 3, 4, 6]
#prints >> False


#Using Lists in the Index Fund Example
VINIX = ['C', 'MA', 'BA', 'PG', 'CSCO', 'VZ', 'PFE', 'HD', 'INTC',
        'T', 'V', 'UNH', 'WFC', 'CVX', 'BAC', 'JNJ', 'GOOGL', 'GOOG', 'BRK.B',
        'XOM', 'JPM', 'FB', 'AMZN', 'MSFT', 'AAPL']
print(VINIX[0])
    #prints >> "C"
print(VINIX[1])
    #prints >> 'MA'

    #You can even use the list to see if a particular stock is in the index fund VINIX or not.
    'GE' in VINIX
    #>>> False

    'GOOGL' in VINIX
    #>>> True

# Mutability refers to whether or not we can change an object once it has been created.
# If an object can be changed, it is called mutable. egs: List datatype. However,
# if an object cannot be changed after it has been created,
# then the object is considered immutable. egs: string datatype

#MODIFING A List
my_array = [1, 2, 3, 4, 5]
my_array[0] = 'one' # changing the content by Index
print(my_array)
#prints >> ['one', 2, 3, 4, 5]


# Quiz: List Indexing
# Use list indexing to determine how many days are in a particular month based on the integer variable month, and store that value in the integer variable num_days. For example, if month is 8, num_days should be set to 31, since the eighth month, August, has 31 days.
#
# Remember to account for zero-based indexing!

month = 8
days_in_month = [31,28,31,30,31,30,31,31,30,31,30,31]

# use list indexing to determine the number of days in month

num_days = days_in_month[month - 1] #finds the number of days of the stated month according to indexing in days_in_month

print(num_days) #prints the numbers of days in August(i.e "8")


# Quiz: Slicing Lists
# Select the three most recent dates from this list using list slicing notation.
# Hint: negative indexes work in slices!

eclipse_dates = ['June 21, 2001', 'December 4, 2002', 'November 23, 2003',
                 'March 29, 2006', 'August 1, 2008', 'July 22, 2009',
                 'July 11, 2010', 'November 13, 2012', 'March 20, 2015',
                 'March 9, 2016']


# TODO: Modify this line so it prints the last three elements of the list
print(eclipse_dates[-3:]) # according to slicing using negative indexing
# prints from >>> 'November 13, 2012' below.

#Mutability in terms of updating
scores = ["A","B","C","D","E"]
grades = "this are the scores " + scores

print(grades)

#updating scores to affect grades
scores[2] = "B+"
print(grades)
# prints >>>  "this are the scores " + ["A","B","B+","D","E"]


#USEFUL LIST METHOD
#1) len() : returns how many element are in the list
new_str = ["yes","no","either"]
print(len(new_str))
#prints >> 3

#2) max() : in terms of number, it returns the highest
numbers = [1,2,3,4,5,6]
print(max(numbers))
#prints >> 6, because "6" is the highest.

#in terms of string, returns the highest in alphabetical order.
new_str = ["yes","no","either","fish"]
print(max(new_str))
#prints >> "yes", because "yes" is the highest in alphabetical order.

# 3) min() : it is the opposite of max()
# min() : in terms of number, it returns the lowest
numbers = [1,2,3,4,5,6]
print(max(numbers))
#prints >> 1, because "1" is the highest.

#in terms of string, returns the lowest in alphabetical order.
new_str = ["yes","no","either","fish"]
print(max(new_str))
#prints >> "either", because "either" is the lowest in alphabetical order.

#4) sorted() : returns the list from the smallest to the largest
numbers = [3,2,1,5,4,6]
print(sorted(numbers))
#prints >> [1,2,3,4,5,6]

#5) join() : inserts a string after each element in a list. NB: it is only for string list.
new_str = ["yes","no","either","fish"]
join_str = "\n".join(new_str) # "\n" stands for new line
print(join_str)
#prints >>  # yes
            # no
            # either
            # fish


#6) append() : adds an element to the end of the list
letters = ['a', 'b', 'c', 'd']
letters.append('z')
print(letters)
#prints >>> ['a', 'b', 'c', 'd', 'z']


#OUTPUTING THE MAX AND MIN LENGHT OF A LIST
a = [1, 5, 8]
b = [2, 6, 9, 10]
c = [100, 200]

print(max([len(a), len(b), len(c)])) #first checks for the lenght, then Select the highest.
print(min([len(a), len(b), len(c)])) #first checks for the lenght, then Select the lowest.

#print output >> 4 and 2.

#SORTING A LIST AND JOINING
names = ["Carol", "Albert", "Ben", "Donna"]
print(" & ".join(sorted(names))) #first sorts the list alphabetically, and joins "&" after each list element.

#print output >>>  Albert & Ben & Carol & Donna

#APPENDING INTO A LIST
names = ["Carol", "Albert", "Ben", "Donna"]
names.append("Eugenia")  # adds "Eugenia" to the end of the list
print(sorted(names)) #then sorts alphabetically and display.

#prints output >>> 'Albert''Ben''Carol''Donna''Eugenia'
