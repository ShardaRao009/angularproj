import { EventEmitter, Injectable } from '@angular/core';

export class MainService {
    postCardJson = [
        {
            "id": "1",
            "name": "Sharda",
            "image": './assets/image/profileBackground.jpg',
            "date": "22nd Dec 2018",
            "category": {
                "type": 0,
                "data": {
                    'text': 'Voting is very easy now a days:You can only vote if your name appears in the Voter List (also known as electoral roll). Verify your name on the list by either:Logging on to electoralsearch.in Calling the Voter Helpline 1950 (please add your STD code before dialling)SMS <ECI> space <EPIC No> to 1950 (EPIC stands for Electors Photo Identity Card also commonly known as Voter ID card). Example - If your EPIC is 12345678 then sms ECI 12345678 to 1950'
                }


            },
            "like": {
                "count": "12",
                "by": [
                    {
                        "id": "125",
                        "name": "anju"
                    },
                    {
                        "id": "128",
                        "name": "manju"
                    },
                    {
                        "id": "145",
                        "name": "sanju"
                    }
                ]
            },
            "comment": {
                "count": "45",
                "totalComments": [
                    {
                        "id": "111",
                        "image": "/url",
                        "name": "pinky",
                        "date": "22dec",
                        "text": "looking awsome",
                        "subComment": {
                            "count": "2",
                            "totalSubComments": [
                                {
                                    "id": "101",
                                    "image": "/url",
                                    "name": "chinky",
                                    "date": "25dec",
                                    "text": "looking good",
                                    "like": {
                                        "count": "12",
                                        "by": [
                                            {
                                                "id": "25",
                                                "name": "shree"
                                            },
                                            {
                                                "id": "28",
                                                "name": "pallu"
                                            },
                                            {
                                                "id": "45",
                                                "name": "chintu"
                                            }
                                        ]
                                    }
                                },
                                {
                                    "id": "181",
                                    "image": "/url",
                                    "name": "radha",
                                    "date": "22dec",
                                    "text": "woow!!!",
                                    "like": {
                                        "count": "3",
                                        "by": [
                                            {
                                                "id": "5",
                                                "name": "agru"
                                            },
                                            {
                                                "id": "8",
                                                "name": "hanka"
                                            },
                                            {
                                                "id": "5",
                                                "name": "roops"
                                            }
                                        ]
                                    }
                                }
                            ],
                            "like": {
                                "count": "3",
                                "by": [
                                    {
                                        "id": "4",
                                        "name": "ram"
                                    },
                                    {
                                        "id": "9",
                                        "name": "shyam"
                                    },
                                    {
                                        "id": "6",
                                        "name": "ghanshyam"
                                    }
                                ]
                            }
                        }
                    }
                ]
            }
        },
        {
            "id": "2",
            "name": "Ziraj",
            "image": './assets/image/profileBackground.jpg',
            "date": "23rd Dec 2018",
            "category": {
                "type": 1,
                "data": './assets/image/profileBackground.jpg'
            },
            "like": {
                "count": "12",
                "by": [
                    {
                        "id": "125",
                        "name": "anju"
                    },
                    {
                        "id": "128",
                        "name": "manju"
                    },
                    {
                        "id": "145",
                        "name": "sanju"
                    }
                ]
            },
            "comment": {
                "count": "45",
                "totalComments": [
                    {
                        "id": "111",
                        "image": "/url",
                        "name": "pinky",
                        "date": "22dec",
                        "text": "looking awsome",
                        "subComment": {
                            "count": "2",
                            "totalSubComments": [
                                {
                                    "id": "101",
                                    "image": "/url",
                                    "name": "chinky",
                                    "date": "25dec",
                                    "text": "looking good",
                                    "like": {
                                        "count": "12",
                                        "by": [
                                            {
                                                "id": "25",
                                                "name": "shree"
                                            },
                                            {
                                                "id": "28",
                                                "name": "pallu"
                                            },
                                            {
                                                "id": "45",
                                                "name": "chintu"
                                            }
                                        ]
                                    }
                                },
                                {
                                    "id": "181",
                                    "image": "/url",
                                    "name": "radha",
                                    "date": "22dec",
                                    "text": "woow!!!",
                                    "like": {
                                        "count": "3",
                                        "by": [
                                            {
                                                "id": "5",
                                                "name": "agru"
                                            },
                                            {
                                                "id": "8",
                                                "name": "hanka"
                                            },
                                            {
                                                "id": "5",
                                                "name": "roops"
                                            }
                                        ]
                                    }
                                }
                            ],
                            "like": {
                                "count": "3",
                                "by": [
                                    {
                                        "id": "4",
                                        "name": "ram"
                                    },
                                    {
                                        "id": "9",
                                        "name": "shyam"
                                    },
                                    {
                                        "id": "6",
                                        "name": "ghanshyam"
                                    }
                                ]
                            }
                        }
                    }
                ]
            }
        },
        {
            "id": "3",
            "name": "hope Tutors",
            "image": './assets/image/profileBackground.jpg',
            "date": "25th Dec 2018",
            "category": {
                "type": 2,
                "data": {
                    "questionForPoll": {
                        "id": "11",
                        "ques": "How is Angular"
                    },
                    "answerForPoll": [
                        {
                            "ansId": "11",
                            "ansCount": "20",
                            "ans": "Good"
                        },
                        {
                            "ansId": "11",
                            "ansCount": "20",
                            "ans": "Bad"
                        },
                        {
                            "ansId": "11",
                            "ansCount": "20",
                            "ans": "Ok Ok"
                        }
                    ]
                }
            },
            "like": {
                "count": "12",
                "by": [
                    {
                        "id": "125",
                        "name": "anju"
                    },
                    {
                        "id": "128",
                        "name": "manju"
                    },
                    {
                        "id": "145",
                        "name": "sanju"
                    }
                ]
            },
            "comment": {
                "count": "45",
                "totalComments": [
                    {
                        "id": "111",
                        "image": "/url",
                        "name": "pinky",
                        "date": "22dec",
                        "text": "looking awsome",
                        "subComment": {
                            "count": "2",
                            "totalSubComments": [
                                {
                                    "id": "101",
                                    "image": "/url",
                                    "name": "chinky",
                                    "date": "25dec",
                                    "text": "looking good",
                                    "like": {
                                        "count": "12",
                                        "by": [
                                            {
                                                "id": "25",
                                                "name": "shree"
                                            },
                                            {
                                                "id": "28",
                                                "name": "pallu"
                                            },
                                            {
                                                "id": "45",
                                                "name": "chintu"
                                            }
                                        ]
                                    }
                                },
                                {
                                    "id": "181",
                                    "image": "/url",
                                    "name": "radha",
                                    "date": "22dec",
                                    "text": "woow!!!",
                                    "like": {
                                        "count": "3",
                                        "by": [
                                            {
                                                "id": "5",
                                                "name": "agru"
                                            },
                                            {
                                                "id": "8",
                                                "name": "hanka"
                                            },
                                            {
                                                "id": "5",
                                                "name": "roops"
                                            }
                                        ]
                                    }
                                }
                            ],
                            "like": {
                                "count": "3",
                                "by": [
                                    {
                                        "id": "4",
                                        "name": "ram"
                                    },
                                    {
                                        "id": "9",
                                        "name": "shyam"
                                    },
                                    {
                                        "id": "6",
                                        "name": "ghanshyam"
                                    }
                                ]
                            }
                        }
                    }
                ]
            }
        }
    ]
    // constructor(mainService:MainService) {
    //     mainService.postCardJson;
    // }
}