use yew::prelude::*;
use web_sys::HtmlElement;

#[derive(Properties, PartialEq)]
pub struct AnimationProps {
    pub children: Children, 
}

struct Animation {
    div: NodeRef,
}

impl Component for Animation {
    type Message = ();
    type Properties = AnimationProps;

    fn create(ctx: &yew::Context<Self>) -> Self {
        Self { div: NodeRef::default() }
    }

    fn update(self: &mut Self, ctx: &yew::Context<Self>, msg: <Self as yew::Component>::Message) -> bool {
        true
    }

    fn view(self: &Self, ctx: &yew::Context<Self>,) -> Html {

        // let div: HtmlElement = self.div.cast().unwrap();

        html! {
            <div ref={self.div.clone()}>
                { ctx.props().children.clone() }
            </div>
            
        }
    }

    fn rendered(self: &mut Self, ctx: &yew::Context<Self>, value: bool) {
        // // Request that the component is updated with this new msg
        // self.link.send_message(());
    }
}


#[function_component(App)]
pub fn app() -> Html {
    html! {
        <>
            <Animation> 
                <img class="logo" src="https://yew.rs/img/logo.png" alt="Yew logo" />
                <h1>{ "DKKDWA" }</h1>
            </Animation>
        </>
    }

            //     <img class="logo" src="https://yew.rs/img/logo.png" alt="Yew logo" />
            // <h1>{ "DKKDWA" }</h1>
            // <span class="subtitle">{ "from Yew with " }<i class="heart" /></span>
}

