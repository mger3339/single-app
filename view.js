export default {
    render(templateName, model, elementId) {

        const resultsNode = document.querySelector(`#${elementId}`);
        templateName = templateName + 'Template';

        const templateElement = document.getElementById(templateName);
        const templateSource = templateElement.innerHTML;
        resultsNode.innerHTML = this.replaceTemplate(templateSource, model);
    },

    renderTemplate(matches, model, template) {
        let info = template;
        for ( let key in model ) {
            if(matches.indexOf(`{{${key}}}`) !== -1) {
                if(!model[key]) {
                    if(key === "followers") {
                        info = info.replace(`{{${key}}}`, 0);
                    } else {
                        info = info.replace(`{{${key}}}`, `${key} not provided `);
                    }
                } else {
                    info = info.replace(`{{${key}}}`, model[key]);
                }
            }
        }

        return info;
    },

    replaceTemplate(template, model) {
        let templates = [];
        let re = /{{([^}}]+)?}}/g;
        let matches = template.match(re);
        if(model instanceof Array) {
            model.forEach((user) => {
                templates.push(this.renderTemplate(matches, user, template));
            });
        } else {
            templates.push(this.renderTemplate(matches, model, template));
        }

        return templates.join(" ");

    }
}