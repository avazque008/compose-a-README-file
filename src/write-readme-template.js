function licenseInfo(license,owner) {
    switch (license){
        case 'Apache License 2.0': 
            return `
    Copyright [${new Date().getFullYear()}] [${owner}]

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at
         
        http://www.apache.org/licenses/LICENSE-2.0
         
    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
    `;
        case 'MIT License':
            return `
    Copyright (c) [${new Date().getFullYear()}] [${owner}]

    Permission is hereby granted, free of charge, to any person obtaining a copy
    of this software and associated documentation files (the "Software"), to deal
    in the Software without restriction, including without limitation the rights
    to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
    copies of the Software, and to permit persons to whom the Software is
    furnished to do so, subject to the following conditions:

    The above copyright notice and this permission notice shall be included in all
    copies or substantial portions of the Software.

    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
    IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
    FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
    AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
    LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
    OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
    SOFTWARE.
    `;
        case 'GNU General Public License v3.0':
            return `
    Copyright (C) <${new Date().getFullYear()}>  <${owner}>

    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.
        
    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.
        
    You should have received a copy of the GNU General Public License
    along with this program.  If not, see <https://www.gnu.org/licenses/>.
    `;
    }
};

function licenseBadge(license){
    switch (license) {
        case 'Apache License 2.0': 
            return '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
        case 'MIT License': 
            return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
        case 'GNU General Public License v3.0':
            return '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)';      
    }

};

function contributionGuide(confirmAdapt,contributionGuide ) {

    if (confirmAdapt) {
        return `
    The Code of Conduct is adapted from the Contributor Covenant, version 2.1, available at https://www.contributor-covenant.org/version/2/1/code_of_conduct.html.
    Community Impact Guidelines were inspired by Mozilla’s code of conduct enforcement ladder.
    For answers to common questions about this code of conduct, see the FAQ at https://www.contributor-covenant.org/faq. 
    Translations are available at https://www.contributor-covenant.org/translations.    
    `;
    }
    return `${contributionGuide}`;
}

// TODO: Create a function to generate markdown for README

const generateFileTemplate = userData => {

return `
# ${userData.title} ${licenseBadge(userData.license)}

## Description

${userData.description}

## Table of Contents

* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)
    
## Installation

${userData.installationInstructions}

## Usage

${userData.usageInformation}

## License
${licenseInfo(userData.license, userData.firstLastName)}

## Contributing
${contributionGuide(userData.ccg, userData.contributionGuidelines)}

## Tests

${userData.testsInstructions}

## Questions

If you require any further information, ${userData.questions}

### Contact Information

* Email Address: ${userData.email}

* [Github Profile](https://github.com/${userData.github}")

`
};


module.exports = generateFileTemplate;